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
photo4 = Photo.create(title:"Opacity 0.8", author_id: demo1.id)
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
photo16 = Photo.create(title:"Kendrick Llama", author_id: demo1.id)
photo17 = Photo.create(title:"White Castle", author_id: demo2.id)
photo18 = Photo.create(title:"Another Day Another Dollar", author_id: demo3.id)
photo19 = Photo.create(title:"New York Alcatraz", author_id: demo1.id)
photo20 = Photo.create(title:"Pretty Lights", author_id: demo2.id)
photo21 = Photo.create(title:"No Sleep Til Brooklyn", author_id: demo3.id)
photo22 = Photo.create(title:"Majestic", author_id: demo1.id)
photo23 = Photo.create(title:"Hard Work Pays Off", author_id: demo2.id)
photo24 = Photo.create(title:"Straight Chillin'", author_id: demo2.id)
photo25 = Photo.create(title:"Dove Men + Care", author_id: demo3.id)
photo26 = Photo.create(title:"Half Dome Looking for Other Half", author_id: demo1.id)
photo27 = Photo.create(title:"Squidward's Not Home", author_id: demo2.id)
photo28 = Photo.create(title:"Git Checkout Branch", author_id: demo2.id)
photo29 = Photo.create(title:"Lost in the Fire", author_id: demo3.id)
photo30 = Photo.create(title:"Closer to the Cloud than Salesforce", author_id: demo1.id)
photo31 = Photo.create(title:"Lets Get Twisty", author_id: demo2.id)
photo32 = Photo.create(title:"Bears on Unicycles", author_id: demo2.id)
photo33 = Photo.create(title:"GoT Wall", author_id: demo3.id)
photo34 = Photo.create(title:"Zap", author_id: demo1.id)
photo35 = Photo.create(title:"Splish Splash", author_id: demo2.id)
photo36 = Photo.create(title:"Fun in the Sun", author_id: demo2.id)
photo37 = Photo.create(title:"Beautiful Sunset", author_id: demo3.id)
photo38 = Photo.create(title:"Winter is Coming", author_id: demo1.id)
photo39 = Photo.create(title:"Moment of Reflection", author_id: demo2.id)
photo40 = Photo.create(title:"Watch Dogs", author_id: demo2.id)
photo41 = Photo.create(title:"Big Bean", author_id: demo3.id)
photo42 = Photo.create(title:"Zip Zap", author_id: demo1.id)
photo43 = Photo.create(title:"Mesmerizing Waterfall", author_id: demo2.id)
photo44 = Photo.create(title:"Gattaca Challenge", author_id: demo2.id)
photo45 = Photo.create(title:"Test Driven Design", author_id: demo3.id)
photo46 = Photo.create(title:"Breakfast with a View", author_id: demo1.id)
photo47 = Photo.create(title:"Water is the Essence of Wetness", author_id: demo2.id)
photo48 = Photo.create(title:"Fairy Land", author_id: demo2.id)

image1 = open("app/assets/images/ggb1.jpg")
photo1.photo.attach(io: image1, filename: "pretty_bridge.jpg")

image2 = open("app/assets/images/ggb2.jpg")
photo2.photo.attach(io: image2, filename: "beautiful_bridge.jpg")

image3 = open("app/assets/images/ggb3.jpg")
photo3.photo.attach(io: image3, filename: "wonderful_bridge.jpg")

image4 = open("app/assets/images/ggb4.jpg")
photo4.photo.attach(io: image4, filename: "opacity.jpg")

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

image16 = open("app/assets/images/lama.jpg")
photo16.photo.attach(io: image16, filename: "kendrick-llama.jpg")

image17 = open("app/assets/images/india.jpg")
photo17.photo.attach(io: image17, filename: "white-castle.jpg")

image18 = open("app/assets/images/nyc1.jpg")
photo18.photo.attach(io: image18, filename: "another-day-another-dollar.jpg")

image19 = open("app/assets/images/nyc2.jpg")
photo19.photo.attach(io: image19, filename: "new-york-alcatraz.jpg")

image20 = open("app/assets/images/chicago2.jpg")
photo20.photo.attach(io: image20, filename: "pretty-lights.jpg")

image21 = open("app/assets/images/brooklyn1.jpg")
photo21.photo.attach(io: image21, filename: "no-sleep-til-brooklyn.jpg")

image22 = open("app/assets/images/mastiff.jpg")
photo22.photo.attach(io: image22, filename: "majestic-title.jpg")

image23 = open("app/assets/images/brooklyn2.jpg")
photo23.photo.attach(io: image23, filename: "hard-work-pays-off.jpg")

image24 = open("app/assets/images/puma.jpg")
photo24.photo.attach(io: image24, filename: "straight-chillin.jpg")

image25 = open("app/assets/images/waterfall4.jpg")
photo25.photo.attach(io: image25, filename: "dove-men-plus-care.jpg")

image26 = open("app/assets/images/halfdome.jpg")
photo26.photo.attach(io: image26, filename: "halfdome-looking-for-other-half.jpg")

image27 = open("app/assets/images/big_heads.jpg")
photo27.photo.attach(io: image27, filename: "squidwards-not-home.jpg")

image28 = open("app/assets/images/woods.jpg")
photo28.photo.attach(io: image28, filename: "git-checkout-branch.jpg")

image29 = open("app/assets/images/volcano.jpg")
photo29.photo.attach(io: image29, filename: "lost-in-the-fire.jpg")

image30 = open("app/assets/images/dubai1.jpg")
photo30.photo.attach(io: image30, filename: "closer-to-the-cloud-than-salesforce.jpg")

image31 = open("app/assets/images/moscow1.jpg")
photo31.photo.attach(io: image31, filename: "lets-get-twisty.jpg")

image32 = open("app/assets/images/moscow2.jpg")
photo32.photo.attach(io: image32, filename: "bears-on-unicycles.jpg")

image33 = open("app/assets/images/waterfall3.jpg")
photo33.photo.attach(io: image33, filename: "got-wall.jpg")

image34 = open("app/assets/images/purple_lightning.jpg")
photo34.photo.attach(io: image34, filename: "zap.jpg")

image35 = open("app/assets/images/volcano1.jpg")
photo35.photo.attach(io: image35, filename: "splish-splash.jpg")

image36 = open("app/assets/images/polar_bear.jpg")
photo36.photo.attach(io: image36, filename: "fun-in-the-sun.jpg")

image37 = open("app/assets/images/grandcanyon.jpg")
photo37.photo.attach(io: image37, filename: "beautiful-sunset.jpg")

image38 = open("app/assets/images/mountains.jpg")
photo38.photo.attach(io: image38, filename: "winter-is-coming.jpg")

image39 = open("app/assets/images/dubai2.jpg")
photo39.photo.attach(io: image39, filename: "moment-of-reflection.jpg")

image40 = open("app/assets/images/chicago1.jpg")
photo40.photo.attach(io: image40, filename: "watch-dogs.jpg")

image41 = open("app/assets/images/bean.jpg")
photo41.photo.attach(io: image41, filename: "big-bean.jpg")

image42 = open("app/assets/images/blue_lightning.jpg")
photo42.photo.attach(io: image42, filename: "zip-zap.jpg")

image43 = open("app/assets/images/waterfall2.jpg")
photo43.photo.attach(io: image43, filename: "mesmerizing-waterfall.jpg")

image44 = open("app/assets/images/beach.jpg")
photo44.photo.attach(io: image44, filename: "gattaca-challenge.jpg")

image45 = open("app/assets/images/capybara.jpg")
photo45.photo.attach(io: image45, filename: "test-driven-design.jpg")

image46 = open("app/assets/images/citycity.jpg")
photo46.photo.attach(io: image46, filename: "breakfast-with-a-view.jpg")

image47 = open("app/assets/images/waterfall1.jpg")
photo47.photo.attach(io: image47, filename: "water-is-the-essence-of-wetness.jpg")

image48 = open("app/assets/images/sweden.jpg")
photo48.photo.attach(io: image48, filename: "fairy-land.jpg")