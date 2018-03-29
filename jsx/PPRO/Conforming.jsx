$._ext_PPRO_CONFORM = {
  /*************
   *  LOOKUPS
   *************/
  getUserName: function() {
    var homeDir = new File('~/');
    var userName = homeDir.displayName;
    homeDir.close();
    return userName;
  },
  searchForBinWithName: function(nameToFind, create) {
    // deep-search a folder by name in project
    var deepSearchBin = function(inFolder) {
      if (inFolder && inFolder.name === nameToFind && inFolder.type === 2) {
        return inFolder;
      } else {
        for (var i = 0; i < inFolder.children.numItems; i++) {
          if (inFolder.children[i] && inFolder.children[i].type === 2) {
            var foundBin = deepSearchBin(inFolder.children[i]);
            if (foundBin) return foundBin;
          }
        }
      }
      if (create) {
        var bin = this.newBin(nameToFind);
        return bin;
      }
      return undefined;
    };
    return deepSearchBin(app.project.rootItem);
  },
  getAllRootItemMediaArray: function() {
    var allMediaProjectItems = [];
    var i = 0;
    for (i; i < app.project.rootItem.children.numItems; i++) {
      var projectItem = app.project.rootItem.children[i];
      if (projectItem.children) {
        allMediaProjectItems = allMediaProjectItems.concat(
          $._ext_UTILS.recurrsiveChildrenItterate(projectItem.children, projectItem.children.numItems),
        );
      } else {
        allMediaProjectItems.push(projectItem);
      }
    }
    return allMediaProjectItems;
  },
  getAllSequences: function(toJSON) {
    var sequences = [];
    var i = 0;
    for (i; i < app.project.sequences.numSequences; i++) {
      var sequence = app.project.sequences[i];
      sequences.push(sequence);
    }
    if (toJSON) {
      return $._ext_JSON.stringify(sequences);
    }
    return sequences;
  },
  searchForSequenceByKey: function(key, value) {
    var foundSeq = null;
    var seqCount = app.project.sequences.numSequences;

    for (var i = 0; i < seqCount; i++) {
      var currentSeq = app.project.sequences[i];

      if (currentSeq && currentSeq.projectItem) {
        if (currentSeq.projectItem[key].toString() === value.toString()) {
          foundSeq = currentSeq;
        }
      }
    }
    return foundSeq;
  },
  projectItemFromPath: function(projectItemPath, root) {
    var items = (root || app.project.rootItem).children;
    for (var i = 0; i < items.numItems; i++) {
      if (items[i].type === ProjectItemType.BIN) {
        var result = this.projectItemFromPath(projectItemPath, items[i]);
        if (result) {
          return result;
        }
      } else if (projectItemPath === items[i].treePath) {
        return items[i];
      }
    }
  },
  findClipByName: function(name, toJSON) {
    var foundChild;
    var allSequences = this.getAllSequences();
    this.getAllRootItemMediaArray().forEach(function(child) {
      var isChildASeq = false;
      for (var i = 0; i < allSequences.length; i++) {
        if (allSequences[i].projectItem.nodeId === child.nodeId) {
          isChildASeq = true;
          break;
        }
      }
      if (!!child.treePath.match(new RegExp(name, 'g')) && !isChildASeq) {
        foundChild = child;
      }
    });
    if (toJSON) {
      return $._ext_JSON.stringify(foundChild);
    }
    return foundChild;
  },
  findClipByTreePath: function(treePath, toJSON) {
    var foundChild;
    var activeSequence = app.project.activeSequence;
    this.getAllRootItemMediaArray().forEach(function(child) {
      if (child.treePath === treePath) {
        foundChild = child;
      }
    });
    if (toJSON) {
      return $._ext_JSON.stringify(foundChild);
    }
    return foundChild;
  },
  extractFrameRateByName: function(name, toJSON) {
    var result = this.extractFrameRateFromXMP(this.findClipXMP(name));
    if (toJSON) {
      return $._ext_JSON.stringify(result);
    }
    return result;
  },
  extractFrameRateFromXMP: function(xmp, toJSON) {
    var result = {};
    $._ext_XMP.initXMP();
    var timecodeField = 'startTimecode';
    if (xmp.doesPropertyExist(XMPConst.NS_DM, timecodeField)) {
      result.startTimecode = xmp.getStructField(
        XMPConst.NS_DM,
        timecodeField,
        XMPConst.NS_DM,
        'timeValue',
      ).value;
      var format = xmp.getStructField(XMPConst.NS_DM, timecodeField, XMPConst.NS_DM, 'timeFormat').value;
      switch (format) {
        case '24Timecode':
          result.frameRate = 24;
          break;
        case '25Timecode':
          result.frameRate = 25;
          break;
        case '2997DropTimecode':
          result.frameRate = 29.97;
          result.dropFrame = true;
          break;
        case '2997NonDropTimecode':
          result.frameRate = 29.97;
          result.dropFrame = false;
          break;
        case '30Timecode':
          result.frameRate = 30;
          break;
        case '50Timecode':
          result.frameRate = 50;
          break;
        case '5994DropTimecode':
          result.frameRate = 59.94;
          result.dropFrame = true;
          break;
        case '5994NonDropTimecode':
          result.frameRate = 59.94;
          result.dropFrame = false;
          break;
        case '60Timecode':
          result.frameRate = 60;
          break;
        case '23976Timecode':
          result.frameRate = 23.976;
          result.dropFrame = false;
          break;
        default:
          break;
      }
    } else if (xmp.doesPropertyExist(XMPConst.NS_DM, 'videoFrameRate')) {
      result.frameRate = parseFloat(xmp.getProperty(XMPConst.NS_DM, 'videoFrameRate').value);
    } else if (xmp.doesPropertyExist(XMPConst.NS_DM, 'audioSampleRate')) {
      result.frameRate = parseInt(xmp.getProperty(XMPConst.NS_DM, 'audioSampleRate').value, 10);
    }
    if (toJSON) {
      return $._ext_JSON.stringify(result);
    }
    return result;
  },
  findClipXMP: function(name, toJSON) {
    var xmpBlob = this.findClipByName(name).getXMPMetadata();
    var xmp = new XMPMeta(xmpBlob);
    if (toJSON) {
      return $._ext_JSON.stringify({ data: xmp.serialize() });
    }
    return xmp;
  },
  /*************
   *  MANIPULATIONS
   *************/
  newBin: function(name, overwrite) {
    if (overwrite) {
      var bin = this.searchForBinWithName(name);
      if (bin) {
        bin.deleteBin();
      }
    }
    return app.project.rootItem.createBin(name);
  },
  createSequenceFromPreset: function(
    name,
    presetPath,
    deleteSequenceWithMatchingName,
    deleteSequenceByNodeId,
    binName
  ) {
    if (deleteSequenceWithMatchingName) {
      var sequence = this.searchForSequenceByKey('name', name);
      if (sequence) {
        app.project.deleteSequence(sequence);
      }
    }
    if (deleteSequenceByNodeId) {
      var sequence = this.searchForSequenceByKey('nodeId', deleteSequenceByNodeId);
      if (sequence) {
        app.project.deleteSequence(sequence);
      }
    }
    var seqName = name || prompt('Name of sequence?', '<<<default>>>', 'Sequence Naming Prompt');
    app.enableQE();
    qe.project.newSequence(seqName, presetPath);
    var seq = this.searchForSequenceByKey('name', seqName);
    if(binName){
      seq.projectItem.moveBin(this.newBin(binName, true));
    }
    return $._ext_JSON.stringify(seq);
  },
  createSequence: function(name, someID, deleteSequenceWithMatchingName, binName) {
    if (deleteSequenceWithMatchingName) {
      var sequence = this.searchForSequenceByKey('name', name);
      if (sequence) {
        app.project.deleteSequence(sequence);
      }
    }
    var someID = someID || 'xyz123';
    var seqName = name || prompt('Name of sequence?', '<<<default>>>', 'Sequence Naming Prompt');
    var seq = app.project.createNewSequence(seqName, someID);
    if (binName) {
      var bin = this.searchForBinWithName(binName);
      if (bin) {
        seq.projectItem.moveBin(bin);
      }
    }
  },
  openInSourceMonitor: function(treePath, timecode) {
    app.enableQE();
    var projectItem = this.projectItemFromPath(treePath);
    if (projectItem) {
      qe.source.openFilePath(projectItem.getMediaPath());
    }
  },
  insertOrAppend: function(treePath, trackIndex, overwrite) {
    var seq = app.project.activeSequence;
    trackIndex = trackIndex || 0;
    var clip = treePath ? this.findClipByTreePath(treePath) : app.project.rootItem.children[0];
    if (clip) {
      var vTrack1 = seq.videoTracks[trackIndex];
      if (vTrack1) {
        if (vTrack1.clips.numItems > 0) {
          var lastClip = vTrack1.clips[vTrack1.clips.numItems - 1];
          if (lastClip && !overwrite) {
            vTrack1.insertClip(clip, lastClip.end.seconds);
          } else if (lastClip && overwrite) {
            vTrack1.overwriteClip(clip, lastClip.end.seconds);
          }
        } else {
          if (!overwrite) {
            vTrack1.insertClip(clip, '00;00;00;00');
          } else {
            vTrack1.overwriteClip(clip, '00;00;00;00');
          }
        }
      } else {
        $._PPP_.updateEventPanel('Could not find first video track.');
      }
    } else {
      $._PPP_.updateEventPanel("Couldn't locate first projectItem.");
    }
    return clip;
  },
  insertOrAppendClip: function(clip, trackIndex, overwrite) {
    var seq = app.project.activeSequence;
    trackIndex = trackIndex || 0;
    var vTrack1 = seq.videoTracks[trackIndex];
    if (vTrack1) {
      if (vTrack1.clips.numItems > 0) {
        var lastClip = vTrack1.clips[vTrack1.clips.numItems - 1];
        if (lastClip && !overwrite) {
          vTrack1.insertClip(clip, lastClip.end.seconds);
        } else if (lastClip && overwrite) {
          vTrack1.overwriteClip(clip, lastClip.end.seconds);
        }
      } else {
        if (!overwrite) {
          vTrack1.insertClip(clip, '00;00;10;10');
        } else {
          vTrack1.overwriteClip(clip, '00;00;00;00');
        }
      }
    } else {
      $._PPP_.updateEventPanel('Could not find first video track.');
    }
    return clip;
  },
  addClipToSequenceTimeline: function(treePath, inTime, outTime, overwrite) {
    this.openInSourceMonitor(treePath);
    qe.source.clip.clearInPoint();
    qe.source.clip.clearOutPoint();
    qe.source.clip.setInPoint(inTime);
    qe.source.clip.setOutPoint(outTime);
    //qe.source.clip.setVideoInPoint(inTime);
    //qe.source.clip.setVideoOutPoint(inTime);
    this.insertOrAppend(treePath, false);
    var seq = app.project.activeSequence;
    var vTrack1 = seq.videoTracks[0];
    var clip = vTrack1.clips[vTrack1.clips.numItems - 1];
    var newIn = clip.inPoint;
    //return $._ext_JSON.stringify(clip.inPoint)
    var newStart = clip.start;
    newStart.seconds += 10;
    clip.start = newStart;
    newIn.seconds += 10;
    clip.inPoint = newIn;
    var newOut = clip.outPoint;
    newOut.seconds -= 4;
    clip.outPoint = newOut;
    clip.duration = clip.duration;
    return true;
  },

  addSubClip: function() {
    var startTimeSeconds = 1.23743;
    var endTimeSeconds = 3.5235;
    var hasHardBoundaries = 0;

    var sessionCounter = 1;
    var takeVideo = 1; // optional, defaults to 1
    var takeAudio = 1; // optional, defaults to 1

    var projectItem = app.project.rootItem.children[0]; // just grabs the first item

    if (projectItem) {
      if (
        projectItem.type == ProjectItemType.CLIP ||
        projectItem.type == ProjectItemType.FILE
      ) {
        var newSubClipName = prompt(
          "Name of subclip?",
          projectItem.name + "_" + sessionCounter,
          "Name your subclip"
        );

        var newSubClip = projectItem.createSubClip(
          newSubClipName,
          startTimeSeconds,
          endTimeSeconds,
          hasHardBoundaries,
          takeVideo,
          takeAudio
        );

        if (newSubClip) {
          newSubClip.setStartTime(12.345); // In seconds. New in 11.0
        }
      } else {
        $._PPP_.updateEventPanel(
          "Could not sub-clip " + projectItem.name + "."
        );
      }
    } else {
      $._PPP_.updateEventPanel("No project item found.");
    }
  },
  addClipToSequenceMatch: function(treePath, name) {
    var clip1 = this.insertOrAppend(treePath, 1, true);
    var clip2 = this.insertOrAppendClip(this.findClipByName(name), 0, true);
    return $._ext_JSON.stringify(clip1.start);
   /* if (clip1.start.seconds > clip2.end.seconds) {
      clip2.end = clip1.end;
      clip2.start = clip1.start;
    } else {
      var newStart = clip1.start;
      newStart.seconds -= 10;
      clip2.start = newStart;
      clip2.end = clip1.end;
    }*/
    var newIn = clip1.inPoint;
    newIn.seconds += o;
    clip2.inPoint = newIn;
    var newOut = clip1.outPoint;
    newOut.seconds += 20;
    clip2.outPoint = newOut;
    clip2.duration = clip1.duration;
    return true;
  },
  createInsertSubClipFromName: function(
    name,
    newSubClipName,
    startTimeSeconds,
    endTimeSeconds,
    binName,
    overwrite,
  ) {
    var projectItem = this.findClipByName(name);
    var newSubClip = projectItem.createSubClip(newSubClipName, startTimeSeconds, endTimeSeconds, 0, 1, 1);

    if (binName) {
      var bin = this.searchForBinWithName(binName);
      if (bin) {
        newSubClip.moveBin(bin);
      }
    }
    var seq = app.project.activeSequence;
    var vTrack1 = seq.videoTracks[0];
    if (vTrack1.clips.numItems > 0) {
      var lastClip = vTrack1.clips[vTrack1.clips.numItems - 1];
      if (lastClip) {
        vTrack1.insertClip(newSubClip, lastClip.end.seconds);
      }
    } else {
      vTrack1.insertClip(newSubClip, '00;00;00;00');
    }
    return JSON.stringify(newSubClip);
  },
};
