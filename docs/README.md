# Stellar Pixels

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Stellar Pixels is a web application inspired by 500px built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Photos
- [ ] A Feed based on Followers
- [ ] Photo Tagging
- [ ] Rich Text Editing
- [ ] Infinite Scroll
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Photos Model, API, and components (2 days)

**Objective:** Photos can be created, read, edited and destroyed through
the API.

- [ ] `Photo` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`PhotosController`)
- [ ] JBuilder views for notes
- Photo components and respective Redux loops
  - [ ] `PhotosIndex`
  - [ ] `PhotoIndexItem`
  - [ ] `PhotoForm`
- [ ] Style photos components
- [ ] Seed photos

### Phase 3: Tagging and Search (2 day)

**Objective:** Photos can be searched for based on the taggings that are provided.

- [ ] `Tags` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`TagsController`)
- [ ] JBuilder views for tags
- [ ] Adding photos requires tags
- [ ] Seed tags

### Phase 4: Tags (1 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ] `Tag` model and `Taggings` join table
- [ ] Fetching tags for notes
- [ ] Adding tags to notes
- [ ] Searching notes by tag
- [ ] Style search & tag components
- [ ] Seed tags with seed data

### Phase 5: Allow Complex Styling in Photos and Feed (1 days, W2 Th 6pm)

**objective:** Allow rich text editing of notes.

- [ ] Use css transition to make view render nicely
- [ ] Use isotope to have images render nicely

### Bonus Features (TBD)
- [ ] Photo views
- [ ] Followers
- [ ] Getting started
- [ ] Galleries
- [ ] Update photo info
- [ ] Notifications
- [ ] Infinite scroll
- [ ] Autocomplete search (maybe unnecessary)
