# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### User API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Photos Cycles

### Photos API Request Actions

* `fetchAllPhotos`
  0. invoked from `PhotosIndex` `didMount`/`willReceiveProps`
  0. `GET /api/photos` is called.
  0. `receiveAllPhotos` is set as the success callback.


* `createPhoto`
  0. invoked from new photo button `onClick`
  0. `POST /api/photos` is called.
  0. `receiveSinglePhoto` is set as the success callback.

* `fetchSinglePhoto`
  0. invoked from `PhotoDetail` `didMount`/`willReceiveProps`
  0. `GET /api/photos/:id` is called.
  0. `receiveSinglePhoto` is set as the success callback.

* `updatePhoto (bonus)`
  0. invoked from `NoteForm` `onSubmit`
  0. `POST /api/photos` is called.
  0. `receiveSinglePhoto` is set as the success callback.

* `destroyPhoto`
  0. invoked from delete photo button `onClick`
  0. `DELETE /api/photos/:id` is called.
  0. `removePhoto` is set as the success callback.

### Photos API Response Actions

* `receiveAllPhotos`
  0. invoked from an API callback
  0. the `PhotoReducer` updates `photos` in the application's state.

* `receiveSinglePhoto`
  0. invoked from an API callback
  0. the `PhotosReducer` updates `photos[id]` in the application's state.

* `removePhoto`
  0. invoked from an API callback
  0. the `PhotoReducer` removes `notes[id]` from the application's state.
