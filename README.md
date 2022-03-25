# Balloon to Mars

Balloon to Mars is an app aimed at disseminating knowledge of astronomy and astronomical events.

You can visit it at: https://balloontomars.netlify.app/

## Description:

Balloon to Mars is an app created to promote a fictitious observatory that offers a reservation system to visit it while it's dedicated to disseminating content related to astronomy. These contents cover real astronomical events that will take place in the coming weeks and information about some space missions carried out by NASA, or spectacular places detected by the telescopes of numerous observatories around the world.

Moreover, users can register to be members of the platform and be able to book a visit to the observatory (by online payment), collaborate by sharing astronomical events or leave comments in the forum and interact with other members.

## User stories:

- **Astronomical Event List**: Users can see all astronomical events.
- **Forum**: Users can see the forum of each astronomical event.
- **Image Gallery**: Users can see all images from gallery.
- **Pic of the Day**: Users can see the pic of the day.
- **Observatory**: Users can see the observatory section (map, ubication, visit hours & contact by email).
- **SignUp**: Users can sign up in the app to become a members.
- **LogIn**: Signed up users can log in to the app.
- **Profile**: Logged in users can access to their profile and check their user info & bookings, as well as edit or delete the account.
- **Booking**: Logged in users can make a booking to visit the observatory on the selected day and make the payment online.
- **Share an Astronomical Event**: Logged in users can share an astronomical event with Balloon to Mars community.
- **Edit/Delete an Astronomical Event**: Logged in users can updated or delete an astronomical event already created.
- **Participate in the Forum**: Logged users can participate in the forum of each astronomical event by leaving a comment.
- **Log out**: Logged users can log out.
- **Admin**: Admin-user can see all bookings done by members to visit the observatory.
- **404**: Users will see a custom 404 (Not Founded) error page if they try to access a path that doesn't exist.
- **Error**: Users will see a custom 500 (Server Error) error page if there are any internal problem with some path.


## Models:

### User Model:
- username: {String, unique & required}
- email: {String, unique & required}
- password: String
- city: String
- country: String
- imageUrl: {String & default}
- role: {String, enum [] & default}
- timestamps: true.

### Event Model:
- title: {String & required}
- description: {String & required}
- image: {String, enum [] & default}
- date: Date
- hour: String
- visibility: String

### Booking Model:
- user: {ObjectId, ref:User}
- firstName: String
- lastName: String
- date: Date
- time: {String & enum[]}
- numberOfPersons: {String & enum[]}
- price: Number

### Commentary Model:
- user: {ObjectId, ref:User}
- event: {ObjectId, ref:Event}
- text {String & required}

## Backlog:

### Pages:
- Admin
- AllBookings
- Login
- Signup
- Error
- NotFound
- DeleteAccount
- MyBookings
- Profile
- UpdateAccount
- AstronomicalEvents
- AstronomicalEventsDetails
- AstronomicalEventsEdit
- Gallery
- Home
- Observatory
- PicOfTheDay

### Components:
- AddCommentary
- AddForm
- AdminSideBar
- Booking
- Footer
- Forum
- Navbar
- ObservatoryCalendar
- ObservatoryMap
- ProfileSideBar
- CheckoutForm
- PaymentIntent

## Backlog:

In 

## Other Files:

### API Services (from Server side):
- gallery.services
- pic-day.services

### BE Services (from Client side):
- auth.services
- booking.services
- events.services
- forum.services
- gallery.services
- pic-day.services
- profile.services
- sendemail.services
- upload.services

### Middlewares:
- isAdmin
- isAuthenticated
- uploader

## Links:

### Netlify Deployment:

https://balloontomars.netlify.app/

### GitHub Server:

https://github.com/Becquerelia/balloon-to-mars-server

### GitHub Client:

https://github.com/Becquerelia/balloon-to-mars-client

### Slides:

https://docs.google.com/presentation/d/1gMIpbOQiXyeNd0KfJprVsu6KggGSqswdU9McBgoAry4/edit?usp=sharing
