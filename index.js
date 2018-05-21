var fs = require('fs');
const path = require('path');
const isArray = require('lodash/isArray');
const { v4 } = require('uuid');
const DA = require('digitalanarchy.helpers');
const Parse = require('path-parse');
const requestJSON = async function(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const loadJSONTS = () => {
  const csInterface = new CSInterface();
  var file = fs.readFileSync(path.join(csInterface.getSystemPath(SystemPath.MY_DOCUMENTS), 'Transcriptive', 'Alexia.json'))
  console.log(file);
};

const insertClip = async clip => {
  const clipData = await window.evalFunctionJSON('$._PPP_.findClipByName', [
    `${clip.clipName}.mp4`,
    true,
  ]);
  const {treePath} = clipData
  console.log(clipData);
  console.log(treePath);
  const inTime = clip.startTime.toFixed(3).toString()
  const outTime = (clip.startTime + clip.duration).toFixed(3).toString()

  //const timeValues = await window.evalFunctionJSON('$._PPP_.extractFrameRate', [clip.clipName, true]);
  /*console.log(treePath);
  console.log(inTime, outTime);
  console.log(timeValues);*/
  // const timecode = window.DigitalAnarchy.Timecode.fromSeconds(inTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame });

  const inserted = await window.evalFunction('$._PPP_.addClipToSequenceTimeline', [
    treePath,
    window.DigitalAnarchy.Timecode.fromSeconds(inTime, { frameRate: 59.7, dropFrame: false }),
    window.DigitalAnarchy.Timecode.fromSeconds(outTime, { frameRate: 59.7, dropFrame: false }),
    /*window.DigitalAnarchy.Timecode.fromSeconds(inTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame }),
window.DigitalAnarchy.Timecode.fromSeconds(outTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame }),*/
  ]);
  await promiseDelay(50);
  const resp = window.evalFunctionJSON('$._PPP_.conform', [treePath, clip.start, inTime, outTime, clip.end]);
  await promiseDelay(50);
  return resp;
};

const promiseDelay = delay => new Promise(fulfill => setTimeout(fulfill, delay));

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

const SIMULATE = {
  removeWordsMiddle: (transcript, toRemove = 0, maxWordsPercent = 30) => {
    const words = [...transcript.words];
    let wordNumToRemove = !!toRemove
      ? toRemove
      : Math.floor(words.length * (Math.random() * maxWordsPercent / 100));
    var _i = 0;
    while (wordNumToRemove > 0) {
      if (Math.random() > 0.5) {
        words.splice(_i, 1);
        wordNumToRemove--;
      }
      _i = (_i + 1) % words.length;
    }
    return { ...transcript, words };
  },
  removeRange: (transcript, range = [0, 0]) => {
    const words = [...transcript.words];
    if (range[1]) {
      words.splice(range[0], range[1]);
    }
    return { ...transcript, words };
  },
};

window.Conform = async () => {
  //const transcripts = await requestJSON('http://0.0.0.0:4433/transcript_data_raw.json');
  const transcript = await requestJSON('http://0.0.0.0:4433/json/transcript.json');
  const parsed = await DA.WatsonPostprocess.watsonPostprocess(transcript, 'en-GB')
  console.log(parsed);
  return
  // const transcriptsAlter = await requestJSON('http://0.0.0.0:4433/flattened_altered.json');
  //const transcriptsAlter = await requestJSON('http://0.0.0.0:4433/transcript_data_altered.json');
  //const transcriptsAlter = [...transcripts].map(transcript => SIMULATE.removeRange(transcript, [4, 8]));
  //const transcriptsAlter = [...transcripts].map(transcript => SIMULATE.removeWordsMiddle(transcript,0));
  // console.log(transcriptsAlter);
  // const clipJson = await requestJSON('http://0.0.0.0:4433/clipData.json');
  const conformingClips = DA.Conforming.fromJSON(transcripts, clipJson)
  const presetName = 'PProPanel';
  const seqName = 'Conformed sequence';
  const binName = 'newBin';
  const seqID = uuidv4();

  const userName = await window.evalFunction('$._PPP_.getUserName', []);

  const csInterface = new CSInterface();
  const OSVersion = csInterface.getOSInformation();
  const sep = OSVersion.indexOf('Windows') >= 0 ? '\\' : '/';
  const v = csInterface.hostEnvironment.appVersion.substring(0, 2) + '.0'
  var presetPath = `${csInterface.getSystemPath(SystemPath.MY_DOCUMENTS)}${sep}Adobe${sep}Premiere\ Pro${sep}${v}${sep}Profile-${userName}${sep}Settings${sep}Custom${sep}${presetName}.sqpreset`;
  console.log(presetPath);
  // await window.evalFunction('$._PPP_.cloneSequence', [])

  //const rr = await window.evalFunctionJSON('$._PPP_.findClipByName', ["Alexia", true]);
  //console.log(rr);
  /* const seqResponse = await window.evalFunction('$._PPP_.createSequence', [
    seqName,
    seqID,
    true,
    binName,
    true
  ]);*/

  const seqResponse = await window.evalFunctionJSON('$._PPP_.createSequenceFromPreset', [
    seqName,
    presetPath,
    true,
  ]);

  //const insertResponse = await conformingClips.reduce((promise, clip) => promise.then(result => insertClip(clip).then(Array.prototype.concat.bind(result))), Promise.resolve([]));
  // clipJson.forEach(createClip);

  /*console.log(clipJson);
  console.log(clipNames);*/
};
