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
      defaultCenter={{ lat: 45.524679, lng: -122.673470 }}
      onClick={props.onMapClick}
      options={{ scrollwheel: false, draggable: false }}
    >
      <Marker
        position={{ lat: 45.524679, lng: -122.673470 }}
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
  <Image src="heading/hoteltempheader.png" width="446px" height="156px" className="scriptHeader" preload/>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Image src="wds-hotel/WDS.hotel.lobby.1.png" width="100%" height="302" />
    <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
      ## Introducing the WDS Hotel™
      Community has always been at the heart of WDS. Every year, many attendees forge lasting friendships and find creative ways to stay together during the weekend before they return home. 
      <p>One of the most frequent requests we receive is a way to centralize the process of group accommodations. Well, we can’t be a matchmaker… but we have reserved <i>an entire hotel</i> for the final four days of WDS 2017.</p>
      <p>This hotel, known during non-WDS times as the <Link to="http://thesocietyhotel.com/">Society Hotel</Link>, consists of one large room with shared bunks (hostel style, but nice) <i>and</i> a number of private rooms, including suites. Want to be the life of the party? Book a bunk. Need your space? Choose one of the rooms or suites.</p>
      <p>If you love the community of WDS, you’ll love the WDS Hotel™. It’s a sleepover party with 100 of your closest friends.</p>
      
      ##### UPDATE (3/30) - The WDS Hotel has completely sold out! See the button below for our other great hotel partners! 
    </Block>
    <Block anchor="center" align="center" width="300" margin="20px 0 0 0">
      <p>
        <Button to="https://worlddominationsummit.com/location">
          <span style={{ fontSize: '32px', paddingRight: '10px', position:'relative', top:'4px' }}>→</span>
          <span style={{ fontSize: '20px' }}>WDS Partner Hotels</span>
        </Button>
      </p>
    </Block>
    <Block type="padded" width="105%" align="center" margin="50px 0 20px" background="sea">
      <Block>
        ## Conveniently Located
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
          ### 203 NW 3rd Ave,
          ### Portland, OR 97209
        </Block>
        <Block type="caption" src="photos/society-hotel.jpg" width="316" css={{ left: '50px', top: '11px' }}
          mobile={{
            all: {width: '510px', left: '0', margin: '0 auto 20px', float: 'none' },
            phone: {width: '260px', left: '0', margin: '0 auto 20px', float: 'none' }
          }}
        >
          ### WDS Hotel™
          <Link to="https://goo.gl/maps/TTdw8Ae8xGu">0.8 Mi from Base</Link>
        </Block>
      </Block>
    </Block>
    <div className="clear" />
  </Block>
  <Block cols="6" css={{ padding: '50px 0 20px' }} textAlign="left">
    ## We're Taking Over an Entire Hotel!
    <p>We've reserved every single room and bed of the Society Hotel during the main events of WDS from <b>Thursday, July 13th until Monday, July 17th</b>. Because this is more than just a typical hotel experience, rooms and bunks will <b>only be available for purchase as a four-night package.</b></p>
    Here's what you need to know...
  </Block>
</Section>
<Section color="blue" css={{ padding: '90px 0 45px 0' }} mobile={{ phone: { padding: '20px 0 40px 0' } }}>
  <div className="clear"></div>
    <Block
    type="padded"
    cols="6"
    textAlign="left"
    bleed={false}
    background="canvas"
    className="has-checklist"
    css={{ padding: '60px 40px' }}
    mobile={{ phone: {
      padding: '60px 25px 60px 10px'
    }}}
    clip="top_lr_1.6"
  >
    ## WDS Hotel™ Package Details

    - 4-nights: Thursday, July 13th (check-in 3pm) to Monday, July 17th (check-out 11am)
    - All hotel taxes included in listed prices
    - Complimentary high speed Wi-Fi
    - Rooftop access
    - Text-a-concierge service
    - Exclusive programming and activities
    - High fives.
     <p><b>Important details:</b> All packages are reserved through WDS and are paid in full upfront and are non-refundable (so make sure you can commit to being there before purchasing). A credit card is required for online reservation and at check-in. WDS is responsible for the reservation process and any changes associated with the 4-night package. The Society Hotel will provide all other hotel and guest services.</p> 
  </Block>
  <Image src="wds-hotel/coffee.bar.png" width="426" height="263" margin="-50px -60px 40px 0" css={{ float: 'right' }} mobile={{ all: { margin: '-50px -15px 100px 0' } }} />
  <div className="clear" />
</Section>
<Section color="white">
  <Block cols="6" css={{ padding: '50px 0 20px' }} textAlign="left">
      ## Let's Do This!
      Here's how to reserve your spot at the WDS Hotel™
      ##### Step #1: Choose your room type (descriptions below)
      We've got three options for travelers with both budget and sleep preferences in mind.
     ##### Step #2: Review the details and FAQ sections
  <p>It's the little details that can make a huge difference in your experience.</p>
  ##### Step #3: Payment and guest information
  <p>Make your room selection, book, tell us who's coming, and then prepare for lift-off.</p>
  </Block>
  <Image src="wds-hotel/bunk.common.png" width="100%" height="302" />
  <Block margin="100px 0 50px 0">
      <Block cols="6" css={{ padding: '10px 0 20px' }} textAlign="left">
        ## Choose Your Adventure
      Whether you like being near the action but need your own private retreat or you're the type of person who loves bunk beds, the WDS Hotel™ has 3 great room options. And the best part—no matter what room you choose everyone will be from WDS and staying in the same building!
      </Block>
      <Grid numCols="3" tabletCols="2" width="968">
        <Block type="image-overlay" anchor="right" src="wds-hotel/suite-room1.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
          ## Private Suite & Bathroom
         Spread out with a bit more space for yourself and your own private bathroom in one of our private suites. The private suite is a refuge for those who want a more traditional hotel room with king size bed, more space, more views, and the privacy of your own bath. (12 available suites) 
         **4-Night Package: $947** (Max occupancy: 2 persons)
        </Block>
        <Block type="image-overlay" anchor="left" src="wds-hotel/standard-room1.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
          ## Standard Room & Shared Bathroom
          Enjoy your own private sanctuary with a dash of community in a private room featuring an ultra comfortable queen-size bed and a shared bathroom Ideal for guests seeking the full hotel experience while still capturing that sense of community found in old-world lodging houses. (25 available rooms)
        **4-Night Package: $697** (max occupancy: 2 persons)
        </Block>
        <Block type="image-overlay" anchor="right" src="wds-hotel/Bunk-room1.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
          ## Bunk Bed & Shared Bathroom
          <p>Get the most bed for your buck in one of our hostel-style bunks in the bunk room. With the custom-built triple-tall bunks, you’ll get both community and privacy. Each bunk has a storage locker, charging station, reading light, and privacy curtain. Full-size luxury mattresses and quiet hours ensure you’ll get solid night’s sleep. Plus, you’ll get the opportunity to make new friends or grow closer with old ones, as you share time together at the community table or kitchenette area. <i>Please Note: Upper bunks require climbing a ladder.</i> (24 available bunks) </p>  
          **4-Night Package: $297** (1 bed per person)
          </Block>
     </Grid>
    </Block>
    <Block cols="8" bleed={false} margin="0 0 80px">
    <Grid numCols="3" tabletCols="2" width="968">
      <Block type="caption" src="wds-hotel/suite-room1.jpg" label="Sold Out!">
        ### Private Suites ($947)
        Private bathroom
      </Block>
      <Block type="caption" src="wds-hotel/standard-room1.jpg" label="Sold Out!">
      ### Standard Room ($697)
      Shared bathroom
      </Block>
      <Block type="caption" src="wds-hotel/Bunk-room1.jpg" label="Sold Out!">
        ### Bunks ($297)
      Shared bathroom
      </Block>
    </Grid>
    </Block>
    <div className="clear" />
    <Block anchor="center" align="center" width="300" margin="20px 0 0 0">
    <p>
      <Button to="https://worlddominationsummit.com/location">
        <span style={{ fontSize: '32px', paddingRight: '10px', position:'relative', top:'4px' }}>→</span>
        <span style={{ fontSize: '20px' }}>WDS Partner Hotels</span>
      </Button>
    </p>
  </Block>
</Section>
<Section color="sea">
    <Block type="padded" background="sea">
      <Block cols="5" textAlign="left" css={{ color: 'white' }}>
        ## WDS Hotel™ FAQs
        <Block className="bigger" width="100%" margin="30px 0 0 0" css={{ textAlign: 'left' }}>You might have some questions. We've got some answers.</Block>
        ### Can I book a WDS Hotel™ package through the Society Hotel? 
        Because of our arrangement with the Society Hotel, WDS is handling reservations for all rooms during the WDS weekend (arriving Thursday, July 13, checking out Monday, July 17). All rooms will be sold as 4-night packages.   
        ### What is your refund/transfer policy for WDS Hotel™ packages?
        <p>All WDS Hotel packages are <b>non-refundable</b>. You can, however, transfer your package to another attendee for a $50 fee until June 10th by contacting the WDS concierge team (not the Society Hotel) at <b>concierge@wds.fm</b>.</p>  
        ### How do I book additional nights before or after the WDS package dates?
        <p>Once you've reserved your WDS Hotel™ package, please contact the Society Hotel by phone (avoid their online reservation system) to set up any additional dates by calling their front desk at <b>503-445-0444</b>. You may be able to stay in the same room type as your WDS Hotel™ package, but that will depend on the hotel's room availability.</p>
        ### When will my credit card be charged?
        Your card will be immediately charged for the full amount when you book a WDS Hotel™ package. You'll also need to provide a credit card upon check in for an incidental hold. This will also allow you to charge any hotel services, like buying a coffee or cocktail, directly to your room.
        ### Can I book a room with another WDS attendee?
        <p>Yes! Similar to any hotel reservation, one person is responsible for the reservation itself and only that person will be able to make any changes. <i>Bunks require individual reservations.</i></p>
        ### Can I book a partial stay or split days with a friend?
        Once you've booked a package, you get the room or bunk for the entire 4 nights regardless of how many days you plan to use. Like any hotel reservation, you are ultimately responsible for any other guests that you let stay in your room. For example, if your friend charges 20 craft microbrews to the room, you'd be responsible for paying the bill.
        ### Can I book a private room with another person who isn’t attending WDS?
        <p>We'd love for everyone staying at the WDS Hotel™ to be part of WDS. However, we understand if you’ve booked a private room and you have a significant other or dependent staying with you who is not attending WDS. <i>For the bunk section of the hotel, all guests need to be registered WDS attendees.</i></p>
        ### What kinds of facilities are in the hotel?
        There is an excellent cafe that serves light fare for breakfast and lunch, which you'll be able to charge to your room. Additionally, as a registered guest you'll have access to the amazing rooftop lounge. Please note there is not a fitness center onsite.    
        ### How do I get to the hotel from the airport? 
        <p>For just $2.50, you can take the MAX red line train from the airport towards "City Center/Beaverton" and get off at the "Old Town/Chinatown" stop. Walk two blocks west on Davis St. and you'll see the hotel at the corner of Davis and 3rd Ave. <Link to="https://goo.gl/maps/93LythVvQEG2">(Google directions).</Link> Taxis and ride share options are also available.</p>
        ### How far is the hotel from the WDS Main Stage?
        <p>The hotel is less than a mile (0.8) walk through downtown <Link to="https://goo.gl/maps/TTdw8Ae8xGu">(Google directions)</Link>. You can also make the trip by bike, light rail (MAX) system, or ride share.</p>
        ### Not finding the answer to your question?
        <p>Contact our year-round concierge team at <b>concierge@wds.fm</b>. They’ll get back to you at lightning speed!</p>
      </Block>
     </Block>
   <div className="clear" />
</Section>
<Section color="canvas">
  <Block>## The WDS Hotel™ Gallery</Block>
  <Tabs style="dots">
    <Tab title="Exterior ">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/wds-hotel/Hotel+Exterior.png" width="800" height="533" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>
      <Block cols="6" textAlign="left"> 
      </Block>
    </Tab>
    <Tab title="Front Desk">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/wds-hotel/Front+Desk.png" width="800" height="533" mobile={{ all: { width: '100%' }}} margin="0 auto 60px" preload/>
      <Block cols="6" textAlign="left">
      </Block>
    </Tab>
    <Tab title="Cafe Counter">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/wds-hotel/Society+Hotel+Barista.jpg" mobile={{ all: { width: '100%' }}} width="800" height="533" margin="0 auto 60px" preload/>
      <Block cols="6" textAlign="left">
      </Block>
    </Tab>
<Tab title="Rooftop Patio">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/wds-hotel/Patio!.png" width="800" height="533" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>
      <Block cols="6" textAlign="left">
      </Block>
    </Tab>
<Tab title="Bunk Room">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/wds-hotel/Bunk+Command.png" width="800" height="533" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>
      <Block cols="6" textAlign="left">
      </Block>
     </Tab>
      <Tab title="Bunk Bed">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/wds-hotel/Bunk+Bed.png" width="800" height="533" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>
      <Block cols="6" textAlign="left"> 
      </Block>
    </Tab>
    <Tab title="Private Room">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/wds-hotel/Private+Room.png" width="800" height="533" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>
      <Block cols="6" textAlign="left">
      </Block>
    </Tab>
    <Tab title="Amenities">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/wds-hotel/Robe+etc.png" width="800" height="533" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>
      <Block cols="6" textAlign="left">
      </Block>
    </Tab>
  </Tabs>
</Section>
<Block anchor="center" align="center" width="300" margin="20px 0 0 0">
  <p>
    <Button to="https://worlddominationsummit.com/location">
      <span style={{ fontSize: '32px', paddingRight: '10px', position:'relative', top:'4px' }}>→</span>
      <span style={{ fontSize: '20px' }}>WDS Partner Hotels</span>
    </Button>
  </p>
</Block>
<Section color="green">
  <Block cols="6" css={{ padding: '15px 0 20px' }}>
   ## Additional Accomodations for Staying in Portland
  <font color="white">Every year WDS partners with iconic Portland hotels to provide our attendees with the best discounts.</font>
 <Block anchor="center" align="center" width="300" margin="20px 0 0 0">
<Button to="https://worlddominationsummit.com/location" newWindow={true} styling="orange" fittotext>2017 Hotel Partners</Button>
 </Block>
  </Block>
</Section>
<Import id="join-us" />
