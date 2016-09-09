# Stellar Pixels

[Stellar Pixels live][heroku]

[heroku]: https://stellar-pixels.herokuapp.com/#/?_k=le8oc0

Stellar Pixels is a full-stack web application inspired by Evernote.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Single-Page App

Stellar Pixels is truly a single-page; all content is delivered on one static page.  The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`.  Sensitive information is kept out of the frontend of the app by making an API call to `SessionsController#get_user`.

```ruby
class Api::SessionsController < ApplicationController
    def create
      if current_user
        render :current_user
      else
        render json: errors.full_messages
      end
    end
 end
  ```

### Photo Rendering and Editing

  On the database side, the photos are stored in one table in the database, which contains columns for `id`, `user_id`, `title`, and `updated_at`, which can be joined with tags and favorites.  Upon login, an API call is made to the database which joins the user table and the note table on `user_id` and filters by the current user's `id`.  These notes are held in the `NoteStore` until the user's session is destroyed.  

  Users can tag their photos which allows for easier searching. The search funcitonality of the site will query the database, selecting all the photos which are a match similar to the phrase that was searched for.

![image of notebook index](http://res.cloudinary.com/stellar-pixels/image/upload/v1473456533/home_ptdpvw.jpg)

### Tags

As with photos, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name` and is called `taggings`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `photo_id`. This table links the photos with their respective tags. 

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for Stellar Pixels are outlined below.

### Galleries

I intend to add a `galleries` feature to the site that allows users to add photos into galleries for easy organization.

### Shopping Cart

I also intend to add a shopping cart that users can add photos that they may be interested in purchasing to. 