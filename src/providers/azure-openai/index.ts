import { ProviderConfigs } from '../types';
import {
  AzureOpenAICompleteConfig,
  AzureOpenAICompleteResponseTransform,
} from './complete';
import {
  AzureOpenAIEmbedConfig,
  AzureOpenAIEmbedResponseTransform,
} from './embed';
import AzureOpenAIAPIConfig from './api';
import {
  AzureOpenAIChatCompleteConfig,
  AzureOpenAIChatCompleteResponseTransform,
} from './chatComplete';
import {
  AzureOpenAIImageGenerateConfig,
  AzureOpenAIImageGenerateResponseTransform,
} from './imageGenerate';
import {
  AzureOpenAICreateSpeechConfig,
  AzureOpenAICreateSpeechResponseTransform,
} from './createSpeech';
import { AzureOpenAICreateTranscriptionResponseTransform } from './createTranscription';
import { AzureOpenAICreateTranslationResponseTransform } from './createTranslation';
import { AzureOpenAIResponseTransform } from './utils';
import { AzureOpenAIRequestTransform } from './uploadFile';

const AzureOpenAIConfig: ProviderConfigs = {
  complete: AzureOpenAICompleteConfig,
  embed: AzureOpenAIEmbedConfig,
  api: AzureOpenAIAPIConfig,
  imageGenerate: AzureOpenAIImageGenerateConfig,
  chatComplete: AzureOpenAIChatCompleteConfig,
  createSpeech: AzureOpenAICreateSpeechConfig,
  createTranscription: {},
  createTranslation: {},
  realtime: {},
  responseTransforms: {
    complete: AzureOpenAICompleteResponseTransform,
    chatComplete: AzureOpenAIChatCompleteResponseTransform,
    embed: AzureOpenAIEmbedResponseTransform,
    imageGenerate: AzureOpenAIImageGenerateResponseTransform,
    createSpeech: AzureOpenAICreateSpeechResponseTransform,
    createTranscription: AzureOpenAICreateTranscriptionResponseTransform,
    createTranslation: AzureOpenAICreateTranslationResponseTransform,
    realtime: {},
    uploadFile: AzureOpenAIResponseTransform,
    listFiles: AzureOpenAIResponseTransform,
    retrieveFile: AzureOpenAIResponseTransform,
    deleteFile: AzureOpenAIResponseTransform,
    retrieveFileContent: AzureOpenAIResponseTransform,
  },
  requestTransforms: {
    uploadFile: AzureOpenAIRequestTransform,
  },
};

export default AzureOpenAIConfig;
