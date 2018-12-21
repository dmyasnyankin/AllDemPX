# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo1 = User.create(email: "demo1@email.com", password:"password") 
demo2 = User.create(email: "demo2@email.com", password:"password") 
demo3 = User.create(email: "demo3@email.com", password:"password") 

Photo.destroy_all
photo1 = Photo.create(title:"Pretty Bridge", author_id: demo1.id)
photo2 = Photo.create(title:"Beautiful Bridge", author_id: demo1.id)
photo3 = Photo.create(title:"Wonderful Bridge", author_id: demo1.id)
photo4 = Photo.create(title:"Amazing Bridge", author_id: demo1.id)
photo5 = Photo.create(title:"Gnarly Bridge", author_id: demo1.id)
photo6 = Photo.create(title:"Sick Bridge", author_id: demo2.id)
photo7 = Photo.create(title:"Best City", author_id: demo2.id)
photo8 = Photo.create(title:"Greatest City", author_id: demo2.id)
photo9 = Photo.create(title:"What a City", author_id: demo2.id)
photo10 = Photo.create(title:"You Got it Dude", author_id: demo2.id)
photo11 = Photo.create(title:"Swervy Lane", author_id: demo3.id)
photo12 = Photo.create(title:"I Walk the Line", author_id: demo3.id)
photo13 = Photo.create(title:"Beep Beep", author_id: demo3.id)
photo14 = Photo.create(title:"West Coast Best Coast", author_id: demo3.id)
photo15 = Photo.create(title:"Not My Fault", author_id: demo3.id)

image1 = open("app/assets/images/ggb1.jpg")
photo1.photo.attach(io: image1, filename: "pretty_bridge.jpg")

image2 = open("app/assets/images/ggb2.jpg")
photo2.photo.attach(io: image2, filename: "beautiful_bridge.jpg")

image3 = open("app/assets/images/ggb3.jpg")
photo3.photo.attach(io: image3, filename: "wonderful_bridge.jpg")

image4 = open("app/assets/images/ggb4.jpg")
photo4.photo.attach(io: image4, filename: "amazing_bridge.jpg")

image5 = open("app/assets/images/baynite.jpg")
photo5.photo.attach(io: image5, filename: "gnarly_bridge.jpg")

image6 = open("app/assets/images/bb1.jpg")
photo6.photo.attach(io: image6, filename: "sick_bridge.jpg")

image7 = open("app/assets/images/downtownsf1.jpg")
photo7.photo.attach(io: image7, filename: "best_city.jpg")

image8 = open("app/assets/images/downtownsf2.jpg")
photo8.photo.attach(io: image8, filename: "greatest_city.jpg")

image9 = open("app/assets/images/downtownsf3.jpg")
photo9.photo.attach(io: image9, filename: "what_a_city.jpg")

image10 = open("app/assets/images/fullhouse.jpg")
photo10.photo.attach(io: image10, filename: "you_got_it_dude.jpg")

image11 = open("app/assets/images/lombard.jpg")
photo11.photo.attach(io: image11, filename: "swervy_lane.jpg")

image12 = open("app/assets/images/embarcadero1.jpg")
photo12.photo.attach(io: image12, filename: "i_walk_the_line.jpg")

image13 = open("app/assets/images/cablecar.jpg")
photo13.photo.attach(io: image13, filename: "beep_beep.jpg")

image14 = open("app/assets/images/thebay.jpg")
photo14.photo.attach(io: image14, filename: "west_coast_best_coast.jpg")

image15 = open("app/assets/images/sanandreas.jpg")
photo15.photo.attach(io: image15, filename: "not_my_fault.jpg")