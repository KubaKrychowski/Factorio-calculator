export interface PatchNoteModel {
  version: string;
  releaseDate: string;
  features: string[];
  minorFeatures: string[];
  bugfixes: string[];
}
