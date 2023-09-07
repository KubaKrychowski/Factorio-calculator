import { Observable, of } from 'rxjs';
import { PatchNoteModel } from "src/app/modules/shared/interfaces/landing-page/patch-note.model";

const patchNotes: PatchNoteModel = {
  version: "1.1.89",
  releaseDate: "16.08.2023",
  features: [
    `Migrated the prototype modding documentation from the wiki to the docs website,
    enabling a more advanced presentation, an offline version, and machine-readability
     of the underlying format. `,
  ],
  minorFeatures: [
    `Added controller vibrations to some actions.`,
    `Added option to capture system mouse cursor when using a controller.
    This fixes cursor teleporting when using both controller and mouse but
    locks the mouse cursor to the game window.`
  ],
  bugfixes: [
    `Fixed a desync between ARM and x86 platforms when calling math.atan2() Lua function with NaN arguments.`,
    `Fixed a player could not obtain achievements if it was in game for longer than 9942h.`,
    `Fixed blueprint setup GUI cutting off at the bottom at certain UI scales.`,
    `Fixed that LuaGuiElement type 'slider' didn't enable/disable correctly when first created.`,
    `Fixed a crash when clearing the cursor stack through script when using capsules.`,
    `Fixed a crash when viewing the map preview when one or more noise expressions are invalid.`,
    `Fixed cursor sometimes teleporting to nearby entities when selecting entities to be built from
    the Quick panel with controller, in multiplayer.`
  ]
}

export const getPatchNotes: Observable<PatchNoteModel> = of(patchNotes);
