*Component Heirarchy*

  **AuthFormContainer**
   - AuthForm

  **GettingStartedContainer**
    - Relevant Photos
    - Select Option
    - Confirmation View  

  **Home Page (Feed)**
    - Photo Area
      * Comment
      * Add To Gallery
      * Favorite

    - Sidebar
      * Stats
      * Advert
      * Who To Follow          

  **Photo Expanded**
    - Favorite
    - Add to Gallery
    - Author
    - Buying Interface
      + Details
      + Price Options
      + Licenses
      + Comments   

  **Uploading Photos**
    - OnClick Option
    - Drag & Drop Option
    - Social Media Option

  **Tagging Uploads**
    - Discoverability
    - Keywords
    - Marketplace
    - Categories
    - Description
    - License  

  **Photo Search**
    - Basic Search
    - Advanced Options
    - Photos View

   **Profile**
    - Photos View
    - Galleries View

  **Gallery**
    - Photos

  **Navbar**
    - Logo
    - Search
    - Main
      + Profile
      + Settings
      + Logout
    - Notifications

  ## Routes

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/" | "FeedContainer" |
  | "/photos" | "PhotosContainer (search)" |
  | "/photos/:id" | "PhotosContainer" |
  | "/galleries" | "GalleriesContainer" |
  | "/upload" | "UploadContainer"
  | "/tags" | "TagContainer" |
  | "/navbar" | "NavbarContainer" |
