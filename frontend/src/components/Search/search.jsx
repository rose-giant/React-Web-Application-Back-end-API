import React from "react"
import { useLocation } from "react-router-dom"
import "./search.css"
import axios from "axios"
import { useEffect, useState } from "react"
import RestaurantCard from "../Home/restaurantcard"
import Nav from "../Nav/nav"
import { useContext } from "react"
import { Context } from "../../App"
import Footer from "../Footer/footer"

export default function Search() {
    const location = useLocation()
    const [signedIn, setSignedIn] = useContext(Context)
    const searchParams = new URLSearchParams(location.search)
    const locationParam = searchParams.get('location')
    const restaurantParam = searchParams.get('restaurant')
    const searchParam = searchParams.get('search')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    const [restaurants, setRestaurants] = useState([])
    const restaurant = {
        address: {
          city: "Pittsburgh",
          country: "US",
          street: "620 William Penn Place"
        },
        description: "At our gastropub, we don't distinguish between commoners and kings; we just want to feed the good people of Pittsburgh. In the restaurant, seasonal menus add a modern flair to classic comforts, complemented by a robust selection of local beers and craft spirits. It's all served in an industrial-inspired setting in downtown Pittsburgh. Come and join us for an uncommonly good time.",
        endTime: "23:00",
        image: "https://resizer.otstatic.com/v2/photos/xlarge/1/31676318.webp",
        managerUsername: "ali",
        name: "The Commoner",
        startTime: "07:00",
        type: "American"}

    useEffect(() => {
        axios.get("http://localhost:8080/restaurants")
          .then(response => {
            setRestaurants(response.data);
          })
          .catch(error => {
            console.error("Error fetching restaurants:", error);
          });
          
          setRestaurants([{"address":{"city":"Pittsburgh","country":"US","street":"620 William Penn Place"},"description":"At our gastropub, we don't distinguish between commoners and kings; we just want to feed the good people of Pittsburgh. In the restaurant, seasonal menus add a modern flair to classic comforts, complemented by a robust selection of local beers and craft spirits. It's all served in an industrial-inspired setting in downtown Pittsburgh. Come and join us for an uncommonly good time.","endTime":"23:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/1/31676318.webp","managerUsername":"ali","name":"The Commoner","startTime":"07:00","type":"American"},{"address":{"city":"Pittsburgh","country":"US","street":"Grant St. &amp; 6th Ave."},"description":"Welcome to Sullivan's Steakhouse in Pittsburgh. You can look forward to hand-cut steaks, fresh seafood, signature cocktails and lively music, all designed to let you untie, unwind and uncork. Located in bustling downtown Pittsburgh, on the first floor of the U.S Steel Tower, this one-of-a-kind steakhouse transports you to another place and time.","endTime":"23:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/2/47090807.webp","managerUsername":"amin","name":"Sullivan's Steakhouse","startTime":"11:00","type":"Steakhouse"},{"address":{"city":"Pittsburgh","country":"US","street":"444 Liberty Ave, Ste 100"},"description":"Quality, exceptional service, and an unparalleled atmosphere have made Eddie Merlot's one of America's great steak houses over the past 20 years. Eddie Merlot's is an homage to the man and his love of a great steak, a great glass of wine, and a good story.","endTime":"21:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/1/25740940.webp","managerUsername":"mohammad","name":"Eddie Merlot's Prime Aged Beef & Seafood","startTime":"11:00","type":"Steak"},{"address":{"city":"San Diego","country":"US","street":"4301 La Jolla Village Drive Suite 2040"},"description":"The Winery Restaurant & Wine Bar has been focused on successfully pairing contemporary California regional cuisine, with a hip, vibrant, sophisticated setting, to create a cutting-edge dining experience. When Partners JC Clow, William Lewis and Chef Yvon Goetz set out to deliver a culinary experience straight from wine county, little did they know that they would also earn the title of Restaurateurs of the Year for their achievements and have their restaurants in Newport Beach and Tustin earn the title of Restaurant of the Year multiple times! The three partners strive to deliver the best dining experience In Orange County on a nightly basis. Chef Goetz, whose accolades include the AAA Five Diamond Award and multiple Chef of the Year honors, describes his menu at The Winery Restaurant as wine country-driven a perfect match for a wine program that features a list with 650 selections that change weekly and climate-controlled cellars, which can house up to 7,500 bottles!","endTime":"21:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/3/42273419.webp","managerUsername":"amin","name":"The Winery Restaurant & Wine Bar","startTime":"12:00","type":"Seafood"},{"address":{"city":"San Diego","country":"US","street":"4301 La Jolla Village Drive Suite 2040"},"description":"Et Voil\u00e0! is a vibrant neighborhood bistro, located along the North Park corridor. Et Voil\u00e0! French Bistro showcases Chef Vincent Viale's talents, mixing French classics with a modern accent. Find local and seasonal products building upon French recipes from various regions, such as Steak Frites, Coquilles St. Jacques, and souffl\u00e9s. Explore the diverse regions of France through a curated wine list, and taste a variety of distinct local ingredients with our crafted cocktails. Et Voila! French Bistro is the destination for those looking for a vibrant dining experience, or even for those looking for a simple glass of wine and informal bite at the bar.","endTime":"23:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/3/53115407.webp","managerUsername":"hasan","name":"Et Voil\u00e0!","startTime":"16:00","type":"French"},{"address":{"city":"San Diego","country":"US","street":"7055 Friars Road"},"description":"At North, we focus on what we do best: Italian from scratch. Enjoy any of our handmade pastas and pizzas, created with seasonal ingredients and inventive flavors. Or, try a different signature dish, prepared with our fresh flavors from the garden, farm, and sea. We've hand crafted seasonal cocktails that pair great with our food, creating a real modern Italia experiences perfect for any occasion.","endTime":"22:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/1/25879481.webp","managerUsername":"alireza","name":"North Italia","startTime":"11:00","type":"Italian"},{"address":{"city":"Tokyo","country":"Japan","street":"Shinjuku"},"description":"Super popular Japanese culture event September 28th, Wine Festival from October 1st to 6th, Halloween-only menu from October 7th, Book your spot NOW","endTime":"05:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/5/26465698.webp","managerUsername":"reza","name":"KUJIRA","startTime":"21:00","type":"Bar"},{"address":{"city":"Edmonton","country":"Canada","street":"10344 102 St NW"},"description":"A mecca for quality steaks, chops and fresh seafood in Edmonton's ICE District, Braven embraces a \u201cgo big or go home\u201d attitude. Located in the heart of Edmonton's ICE District, we invite our guests to abandon all hesitation, embrace adventure and enjoy life to its fullest.","endTime":"22:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/2/47106621.webp","managerUsername":"amin","name":"Braven","startTime":"06:00","type":"Steak"},{"address":{"city":"Edmonton","country":"Canada","street":"10550 115 St NW"},"description":"We are a floral-inspired restaurant located in downtown Edmonton. We offer artisan coffee and a wide range of beautifully curated dishes made from locally sourced ingredients. Choose to dine within two unique dining areas: The Flower Tree and The Flower House.","endTime":"21:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/2/47734196.webp","managerUsername":"amin","name":"BREW+BLOOM","startTime":"09:00","type":"Contemporary Canadian"},{"address":{"city":"Edmonton","country":"Canada","street":"170th Street"},"description":"Welcome to Earls 170th Street, your go-to destination for a memorable modern dining experience in our recently renovated space. Discover our enticing daily features, unwind during Happy Hour, and enjoy late-night Happy Hour offerings. Immerse yourself in the lively ambiance of our patio, where you can bask in the outdoors while savouring delicious food and drinks. Whether you're looking for a casual evening or a vibrant night out, we have you covered. Your table is waiting. We can't wait to see you!","endTime":"23:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/3/52163623.webp","managerUsername":"amin","name":"Earls Kitchen + Bar","startTime":"11:00","type":"American"},{"address":{"city":"Frankfurt","country":"Germany","street":"Opernpl. 14, 60313 Frankfurt am Main"},"description":"Eine Champagner-Weinbar, die von Spanien, Italien und Frankreich lebt. Die Weintrilogie, die in den Gl\u00e4sern perlt. Mitten in Frankfurt.","endTime":"23:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/3/54305906.webp","managerUsername":"amin","name":"Casa De Ros\u00e9","startTime":"11:00","type":"Mediterranean"},{"address":{"city":"Frankfurt","country":"Germany","street":"Gro\u00dfe Eschenheimer Stra\u00dfe"},"description":"The restaurant offers authentic, fresh, homemade and handmade national dishes of modern Mexican cuisine. The menu includes fish and meat, as well as vegetarian, gluten-free and vegan dishes and sweet delicacies. The offer is based on a sharing model.","endTime":"23:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/3/49589055.webp","managerUsername":"amin","name":"Restaurant Club Social Mexicano","startTime":"11:00","type":"Mexican"},{"address":{"city":"Frankfurt","country":"Germany","street":"Steigenberger Frankfurter Hof, Bethmannstra\u00dfe 33, 60311 Frankfurt am Main"},"description":"Freuen Sie sich auf eine kulinarische Reise durch die Welt der asiatischen Fine Dining Cuisine. Im Zukaya trifft man auf eine elegante und gem\u00fctliche Atmosph\u00e4re, die das perfekte Ambiente f\u00fcr ein romantisches Abendessen zu zweit, ein Treffen mit Freunden oder Gesch\u00e4ftspartnern oder eine festliche Feier mit der Familie schafft. Lassen Sie sich von bekannten asiatischen K\u00f6stlichkeiten sowie einzigartigen Sushi-Kreationen verf\u00fchren und tauchen Sie ein in eine Oase des Genusses.","endTime":"22:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/1/56419384.webp","managerUsername":"amin","name":"Zukaya","startTime":"10:00","type":"Asian"},{"address":{"city":"Frankfurt","country":"Germany","street":"Opernplatz 10, Frankfurt am Main, HE 60313"},"description":"","endTime":"01:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/2/43476531.webp","managerUsername":"amin","name":"Charlot","startTime":"12:00","type":"Italian"},{"address":{"city":"Frankfurt","country":"Germany","street":"Opernplatz 1, Frankfurt am Main, HE 60313"},"description":"","endTime":"22:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/1/26090243.webp","managerUsername":"amin","name":"Restaurant Opera","startTime":"11:00","type":"European"},{"address":{"city":"Hamburg","country":"Germany","street":"Rotherbaum"},"description":"","endTime":"22:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/2/48899571.webp","managerUsername":"amin","name":"Nomad","startTime":"12:00","type":"Japanese"},{"address":{"city":"Hamburg","country":"Germany","street":"Neustadt"},"description":"Tarantella provides an upscale dining experience that even the most discerning of connoisseurs would appreciate. Centrally located in St. Stephen's square, Tarantella's evolution from a nightclub in the 1970s to its current form is reflected in its immaculately decorated interior. With Tarantella's open kitchen design, patrons can watch their dishes being carefully made by the restaurant's renown chefs. The restaurant also has a wine cellar stocked with rare vintages and other treasures. For an even more intimate dining experience, a wine cellar that fits up to 20 people is available for rent. For food, drink and ambiance, no other restaurant comes close to Tarantella.","endTime":"02:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/1/25084166.webp","managerUsername":"amin","name":"Tarantella","startTime":"12:00","type":"German"},{"address":{"city":"Calgary","country":"Canada","street":"Downtown"},"description":"Major Tom is elevated yet approachable, excellent and at ease, confident and gracious. The food, the room, and the service capture the sophistication and glamour of mid-century New York penthouse life, and you feel instantly at home. We maintain the high standards our guests have come to expect, and we do this while being down-to-earth, lively, playful, quirky, fun, and full of personality.","endTime":"02:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/1/50825560.webp","managerUsername":"amin","name":"MAJOR TOM","startTime":"12:00","type":"Continental"},{"address":{"city":"Calgary","country":"Canada","street":"12th Avenue"},"description":"An all day neighbourhood eatery that boasts bold new North American cuisine and vegetable anchored dishes. Ten Foot Henry bridges the gap between what you should be eating, and what you really want to eat.","endTime":"23:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/1/24384323.webp","managerUsername":"amin","name":"Ten Foot Henry","startTime":"11:00","type":"Canadian"},{"address":{"city":"Calgary","country":"Canada","street":"8th Avenue"},"description":"Hy's Calgary is a modern rendition of the classic steakhouse tradition. Pride of place is held by the circular, glass enclosed grill room, producing perfect charcoal grilled Canadian Prime Grade steaks.","endTime":"21:00","image":"https://resizer.otstatic.com/v2/photos/xlarge/1/53269670.webp","managerUsername":"amin","name":"Hy's Steakhouse","startTime":"11:00","type":"Steakhouse"}]
)
      }, [])

    const filteredRestaurants = restaurants.filter(restaurant => {
        const matchesLocation = !locationParam || restaurant.address.city === locationParam
        const matchesRestaurantType = !restaurantParam || restaurant.type === restaurantParam
        const matchesSearchQuery = !searchParam || restaurant.name.toLowerCase().includes(searchParam.toLowerCase())
        return matchesLocation && matchesRestaurantType && matchesSearchQuery
    })

    const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredRestaurants.slice(indexOfFirstItem, indexOfLastItem);

    return(
        
        <>
        <div className="homepage">
            <Nav /> 
        </div>
        <div className="search-container">
          <ul>
            {currentItems.map((restaurant, index) => (
              <li key={index}>
                <RestaurantCard restaurant={restaurant} />
              </li> 
            ))}
          </ul>
        
        </div>

        <div className="pages">
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
        <Footer />
      </>
    )
}