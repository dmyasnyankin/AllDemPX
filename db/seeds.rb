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
photo1 = Photo.create(title:"Pretty Pic", author_id: demo1.id)
photo2 = Photo.create(title:"Beautiful Pic", author_id: demo1.id)
photo3 = Photo.create(title:"Terrible Pic", author_id: demo2.id)
photo4 = Photo.create(title:"Worst Pic", author_id: demo2.id)
photo5 = Photo.create(title:"Gnarly Pic", author_id: demo3.id)
photo6 = Photo.create(title:"Sick Pic", author_id: demo3.id)




image1 = open("app/assets/images/baybaybridge.jpg")
photo1.photo.attach(io: image1, filename: "pretty_pic.jpg")