const { v4 } = require('uuid');
const Parse = require('path-parse');

const requestJSON = async function(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const insertClip = async (clip, conformingClips) => {
  const { treePath } = await window.evalFunctionJSON('$._ext_PPRO_CONFORM.findClipByName', [
    clip.clipName ? clip.clipName : Parse(clip.mediaPath).base,
    true,
  ]);
  const inTime = clip.startTime.toFixed(3).toString();
  const outTime = (clip.startTime + clip.duration).toFixed(3).toString();

  console.log(treePath);
  console.log(inTime, outTime);
  const timeValues = await window.evalFunctionJSON('$._ext_PPRO_CONFORM.extractFrameRateByName', [
    clip.clipName,
    true,
  ]);
  const timecode = window.DigitalAnarchy.Timecode.fromSeconds(inTime, {
    frameRate: timeValues.frameRate,
    dropFrame: timeValues.dropFrame,
  });

  /*  return window.evalFunction('$._ext_PPRO_CONFORM.addClipToSequenceTimeline', [
    treePath,
    inTime,
    outTime
    //window.DigitalAnarchy.Timecode.fromSeconds(inTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame }),
    //window.DigitalAnarchy.Timecode.fromSeconds(outTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame }),
  ]);*/

  return window.evalFunction('$._ext_PPRO_CONFORM.addClipToSequenceMatch', [
    treePath,
    'Dhiraj.mp4',
    //window.DigitalAnarchy.Timecode.fromSeconds(inTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame }),
    //window.DigitalAnarchy.Timecode.fromSeconds(outTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame }),
  ]);
};

const insertSubClip = async (clip,binName) => {
  console.log(clip);
  const inTime = clip.startTime
  const outTime = inTime + clip.duration
  console.log(inTime);
  console.log(outTime);
  return window.evalFunction('$._ext_PPRO_CONFORM.createInsertSubClipFromName', [
    clip.clipName,
    `${clip.clipName}_sub`,
    inTime,
    outTime,
    //window.DigitalAnarchy.Timecode.fromSeconds(inTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame }),
    //window.DigitalAnarchy.Timecode.fromSeconds(outTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame }),
    binName
  ]);
};

window.InsertClips = async () => {
  /* const response = await request('http://0.0.0.0:4433/output.json');
   console.log(clipJson);
   const clipNames = clipJson.map(clip => {
     return clip.clipName;
   });
   const insertResponse = await Promise.all(clipJson.map(clip => insertClip(clip)));*/
};

/*************
*

THE START TIMES ARE ACCORDING TO THE TIMELINE IN THE DATA

WE NEED TO CONVERT TO CLIP IN/OUT TIMES




*************/

window.Conform = async () => {
  const transcripts = await requestJSON('http://0.0.0.0:4433/output.json');
  const clipJson = await requestJSON('http://0.0.0.0:4433/clipData.json');
  const conformingClips = window.DigitalAnarchy.Conforming.fromJSON(transcripts, clipJson);
  const seqName = 'Conformed sequence';
  const binName = 'newBin';
  const seqID = uuidv4();

  const userName = await window.evalFunction('$._ext_PPRO_CONFORM.getUserName', []);

  const csInterface = new CSInterface();
  const OSVersion = csInterface.getOSInformation();
  const sep = OSVersion.indexOf('Windows') >= 0 ? '\\' : '/';
  const v = csInterface.hostEnvironment.appVersion.substring(0, 4);
  var presetPath = `${csInterface.getSystemPath(SystemPath.MY_DOCUMENTS)}${sep}Adobe${sep}Premiere\ Pro${sep}${v}${sep}Profile-${userName}${sep}Settings${sep}Custom${sep}Alexia.sqpreset`;
  // await window.evalFunction('$._ext_PPRO_CONFORM.cloneSequence', [])

  //const rr = await window.evalFunctionJSON('$._ext_PPRO_CONFORM.findClipByName', ["Alexia", true]);
  //console.log(rr);
  /* const seqResponse = await window.evalFunction('$._ext_PPRO_CONFORM.createSequence', [
    seqName,
    seqID,
    true,
    binName,
    true
  ]);*/

  const seqResponse = await window.evalFunctionJSON('$._ext_PPRO_CONFORM.createSequenceFromPreset', [
    seqName,
    presetPath,
    seqName,
  ]);
  console.log(seqResponse);
  const insertResponse = await Promise.all(
    conformingClips.slice(0, 1).map(clip => insertClip(clip, conformingClips))
  );
  console.log(insertResponse);
  // clipJson.forEach(createClip);

  /*console.log(clipJson);
  console.log(clipNames);*/
};

window.ConformSubClips = async () => {
  const transcripts = await requestJSON('http://0.0.0.0:4433/output.json');
  const clipJson = await requestJSON('http://0.0.0.0:4433/clipData.json');
  const conformingClips = window.DigitalAnarchy.Conforming.fromJSON(transcripts, clipJson);
  const seqName = 'Conformed sequence';
  const binName = 'newBin';
  const seqID = uuidv4();

  const userName = await window.evalFunction('$._ext_PPRO_CONFORM.getUserName', []);

  const csInterface = new CSInterface();
  const OSVersion = csInterface.getOSInformation();
  const sep = OSVersion.indexOf('Windows') >= 0 ? '\\' : '/';
  const v = csInterface.hostEnvironment.appVersion.substring(0, 4);
  var presetPath = `${csInterface.getSystemPath(SystemPath.MY_DOCUMENTS)}${sep}Adobe${sep}Premiere\ Pro${sep}${v}${sep}Profile-${userName}${sep}Settings${sep}Custom${sep}Alexia.sqpreset`;
  const seqResponse = await window.evalFunctionJSON('$._ext_PPRO_CONFORM.createSequenceFromPreset', [
    seqName,
    presetPath,
    seqName,
    false,
    binName
  ]);

  const insertResponse = await Promise.all(
    conformingClips.map(clip => insertSubClip(clip, binName))
  );
  //await window.evalFunction('$._ext_PPRO_CONFORM.addSubClip', []);
  console.log(insertResponse);
};
