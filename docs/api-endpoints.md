# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Photos

- `GET /api/photos`
  - Photos index/search
  - accepts `tag_name` query param to list photos by tag
  - accepts pagination params (if I get there)
- `POST /api/photos`
- `GET /api/photo/:id`
- `PATCH /api/photo/:id`
- `DELETE /api/photo/:id`

### Tags

- A photo's tags will be included in the photo show template
- `GET /api/photos`
  - includes query param for typeahead suggestions
- `POST /api/photos/:photo_id/photos`: add tag to photo by name
  - if photo doesn't already exist, it will be created
- `DELETE /api/photos/:photo_id/photos/:tag_name`: remove tag from photo by name
