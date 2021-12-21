import {createAction, props} from "@ngrx/store";

export const retrievedGalleryList = createAction(
  "[Gallery API] Gallery API Success",
  props<{ allGallery: any }>(),
)
