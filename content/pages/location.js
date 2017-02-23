<Script>
  import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

  let mapComponent = false;
  function handleMapLoad(map) {
    mapComponent = map;
    if (map) {
    }
  }

  const PDXLocationMap = withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={13}
      onMapLoad={handleMapLoad}
      defaultCenter={{ lat: 45.516791, lng: -122.681333 }}  
      onClick={props.onMapClick}
    >
      <Marker
        position={{ lat: 45.516791, lng: -122.681333 }}
      />
    </GoogleMap>
  ));
</Script>
<Section
  headerImage="hero/location.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/location.png" width="446px" height="156px" className="scriptHeader" preload/>
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="green">
    <Block>
      ## Your Base in Portland
    </Block>
    <Block className="locationMap" anchor="left" width="510px" margin="50px auto 0 auto" mobile={{ all: { width: '510px', float: 'none' }, phone: {width: '260px', height:'220px' } }}>
      <PDXLocationMap
        containerElement={
          (is.phone() ?
            <div style={{ height: '220px', width: '260px' }} /> :
            <div style={{ height: '400px', width: '510px' }} />
          )
        }
        mapElement={
          (is.phone() ?
            <div style={{ height: '220px', width: '260px' }} /> :
            <div style={{ height: '400px', width: '510px' }} />
          )
        }
      />
    </Block>
    <Block anchor="left" width="370px" textAlign="left">
      <Block width="340px" css={{ padding: '50px 20px 50px 70px', fontFamily: 'Vitesse', color: 'white', fontSize: '18px' }} mobile={{ all: {padding: '50px 0px 50px 0px' } }} align="center">
        ### 1037 SW Broadway,
        ### Portland, OR 97205
      </Block>
      <Block type="caption" src="photos/airport.png" width="316" css={{ left: '50px', top: '11px' }}
        mobile={{
          all: {width: '510px', left: '0', margin: '0 auto 20px', float: 'none' },
          phone: {width: '260px', left: '0', margin: '0 auto 20px', float: 'none' }
        }}
      >
        ### PDX Airport
        <Link to="https://goo.gl/maps/teMTfSt4MzQ2">12.6 Mi from Base</Link>
      </Block>
    </Block>
    <div className="clear" />
  </Block>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Lodging
    Portland is an affordable destination, with the lowest hotel rates of any major west coast city. Every year we arrange a number of discounts from partner hotels. Other attendees rent through AirBnB or stay at a local hostel. With Portland being a very popular destination in the summertime, it&apos;s important to book your rooms ASAP. This year we&apos;ve secured rooms at these five amazing Portland properties (including the all new WDS Hotel)*, all within walking distance or a quick ride on public transit to WDS events and activities. 

<p><i>*Please note: The ability to reserve your room at one of our partner hotels will be available soon.</i></p>
</Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Image src="photos/modera-lobby.png" width="100%" height="302" />
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Grid numCols="3" tabletCols="2">
      <Block type="caption" src="photos/society-hotel.jpg" label="Coming Soon">
        ### The WDS Hotel
        **0.8 Mi** from Base
      </Block>
      <Block type="caption" src="photos/Paramount-Hotel.jpg" label="Coming Soon">
        ### Paramount Hotel
        **0.1 Mi** from Base
      </Block>
      <Block type="caption" src="photos/Hotel-Modera-Exterior.jpg" label="Coming Soon">
        ### Hotel Modera
        **0.3 Mi** from Base
      </Block>
      <Block type="caption" src="photos/hilton.png" label="Coming Soon">
        ### Hilton
        **0.5 Mi** from Base
      </Block>
      <Block type="caption" src="photos/Jupiter-Hotel-exterior.jpg" label="Coming Soon">
        ### Jupiter Hotel
        **1.5 Mi** from Base
      </Block>
    </Grid>
  </Block>
  <div className="clear" />
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Alternative Lodging Options
    If you can&apos;t get a room at one of these hotels or just want to do something else, there are numerous other options. Here are a couple of WDS attendee favorites:
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
  <Grid numCols="3" tabletCols="2" width="968">
    <Block type="caption" src="photos/Crystal.Hotel.jpg">
      ### Crystal Hotel
      <Link to="http://www.mcmenamins.com/CrystalHotel">0.6 Mi from Base</Link>
    </Block>
    <Block type="caption" src="photos/Portland-Hostel.jpg">
     ### Portland NW Hostel
      <Link to="http://nwportlandhostel.com/">1.0 Mi from Base</Link>
    </Block>
    <Block type="caption" src="photos/PDX-airbnb.jpg">
      ### Airbnb listings
      <Link to="https://goo.gl/yOaB4l">0.5 Mi from Base</Link>
    </Block>
  </Grid>
  </Block>
  <div className="clear" />
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="orange">
    <Block anchor="left" align="none" width="222" margin="0 40px 0 0">
      <Image src="icon/circle-transit-green.png" align="center" width="130" height="130" margin="28px 0 48px 0" />
      <Button to="http://trimet.org/#/planner" newWindow={true} styling="white">TriMet Trip Planner</Button>
    </Block>
    <Block anchor="left" align="none" width="153" margin="0 60px 0 0">
      <Image src="icon/bike-green-circle.png" align="center" width="145" height="130" margin="28px 0 48px 0" />
      <Button to="https://www.biketownpdx.com/" newWindow={true} styling="white">Biketown</Button>
    </Block>
    <Block anchor="left" textAlign="left" width="350" margin="24px 0 0 0">
      ## Transportation
      Portland has one the best public transit systems (TriMet) in the country - no need to rent a car during your whole time in the city. Of our many options Portland's fast-and-easy light rail service (MAX) goes directly from the airport to downtown for $2.50. 

Other alternative forms of transportation include the Street Car, Car2Go, Uber, Lyft, and for the cyclists, Portland’s new bikehsare program Biketown.
    </Block>
    <div className="clear" />
  </Block>
  <Block margin="125px 0 50px 0">
    ## Food & Dining
    <Grid numCols="3" tabletCols="2" width="968">
      <Block type="image-narrow" src="photos/food-carts.jpg">
        ## Food Carts
        <Button to="https://goo.gl/jBmx05" newWindow={true} fitToText>View More</Button>
      </Block>
      <Block type="image-narrow" src="photos/restaurants.jpg">
        ## Restaurants
        <Button to="http://pdx.eater.com/maps/best-portland-restaurants-38" newWindow={true} fitToText>View More</Button>
      </Block>
      <Block type="image-narrow" src="photos/farmers-market.jpg">
        ## Farmer&apos;s Markets
        <Button to="http://www.portlandfarmersmarket.org/" newWindow={true} fitToText>View More</Button>
      </Block>
    </Grid>
  </Block>
  <Block margin="125px 0 50px 0">
    <Block cols="6">
      ## The City
      You'll have the chance to wander and explore. In short, it will be an amazing weekend in an incredible city (and for those attending from nearby, you'll enjoy meeting new friends while showing off our funky neighborhoods).                                                                                       
    </Block>
    <Grid numCols="3" tabletCols="2" width="968">
      <Block type="image-overlay" anchor="right" icon="outline-beers" src="photos/portland-sign.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Neighborhoods: Hawthorne
        Hawthorne: Stock up on your mustache wax in the hipster capital of the universe! Get there on the 14 bus, which stops at SW Madison and 4th, then get off about 10 minutes later on Hawthorne Boulevard, anywhere between 20th and 39th streets.
      </Block>
      <Block type="image-overlay" anchor="left" icon="outline-bike" src="photos/pearl-district-portland.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Neighborhoods: NW & Pearl
        Northwest and the Pearl District, reachable by streetcar or a stroll, are the trendy side to Hawthorne’s old-school vibe. Check out the area around NW 23rd, with nice pubs and good ethnic food options.
      </Block>
      <Block type="image-overlay" anchor="right" icon="outline-eye" src="photos/powells-books.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Powell’s Books
        No trip to Portland is complete without a pilgrimage to Powell’s City of Books, located on an entire city block at 1005 W Burnside.
      </Block>
      <Block type="image-overlay" anchor="left" icon="outline-camera" src="photos/waterfront.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Waterfront
        Walk, jog, or bike the waterfront area, starting in the south end and continuing to the Steel Bridge near the train station area.
      </Block>
    </Grid>
  </Block>
</Section>
<Import id="wait-list" />
