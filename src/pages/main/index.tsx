import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map,ChevronRight, ChevronLeft, Crosshair, Flag, HelpCircle, Home, LogIn, LogOut, MapPin, Save, Settings, Target, X } from 'feather-icons-react';
import { animated, useSpring } from '@react-spring/web';
import useApi from '@/hooks/useApi';
import { ThreeCircles } from 'react-loader-spinner';
import { fromAndDestinationCombination, Place } from '@/data';

const Main = () => {
  const navigate = useNavigate();
  const { places, popularPlaces, routes, loading, error } = useApi();
  const [showHeader, setShowHeader] = useState(true);
  const [type, setType] = useState<"all" | "mall" | "hotel" | "club" | "hospital">("all");
  const [showDestination, setShowDestination] = useState(true);
  const [showFrom, setShowFrom] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [typedPoint, setTypedPoint] = useState<string | undefined>(undefined)
  const [destinationTypedPoint, setDestinationTypedPoint] = useState<string | undefined>(undefined)
  const [selectedStart, setSelectedStart] = useState<Place | null>(null)
  const [selectedDestination, setSelectedDestination] = useState<Place | null>(null)
    
  const types = ['all', 'mall', 'hotel', 'club', 'hospital']

  const env: 'development' | 'production' = useMemo(() => {
    return import.meta.env.VITE_TEST || process.env.NODE_ENV === 'test' ? 'development' : 'production';
  }, []);

  const top = useMemo(() => {
    return showHeader ? '200px' : '120px';
  }, [showHeader]);

  const headerHeight = useMemo(() => {
    return showHeader ? '40%' : '25%';
  }, [showHeader]);

  const contentHeight = useMemo(() => {
    return showHeader ? '50%' : '65%';
  }, [showHeader]);

  const showContent = useMemo(() => {
    return showHeader ? true : false;
  }, [showHeader]);

  const resetAll = () => {
    setShowButton(true);
    setShowDestination(true);
    setShowFrom(true);
    setShowHeader(true);
  }

  const onEnterStartPoint = () => {
    setShowButton(false);
    setShowDestination(false);
    setShowHeader(false);
    setType('all');
  }

  const onEnterDestination = () => {
    setShowButton(false);
    setShowHeader(false);
    setShowFrom(false);
    setType('all');
  }

  // Filter by type
  const filteredPlaces = useMemo(() => {
    // filter by starting point first
    if(showFrom) {
      if (typedPoint && (!showHeader && showFrom)) {
        return places.filter((place) => place.name.toLowerCase().includes(typedPoint.toLowerCase()));
      }
    }
    if(showDestination) {
      if (destinationTypedPoint && (!showHeader && showDestination)) {
        return places.filter((place) => place.name.toLowerCase().includes(destinationTypedPoint.toLowerCase()));
      }
    }
    if (type === "all") return popularPlaces;
    return popularPlaces.filter((place) => place.type === type);
  }, [popularPlaces, type, typedPoint, destinationTypedPoint, showFrom, showDestination]);

  const onSelectOption = (place: Place) => {
    if(!typedPoint && !showFrom && !showDestination) return;
    if(showFrom) {
      setSelectedStart(place)
      setTypedPoint(place.name)
    } else if(showDestination) {
      setSelectedDestination(place)
      setDestinationTypedPoint(place.name)
    }
    resetAll()
  }

  const onMatatuSearch = () => {
    // get the route from the selected start and destination
    // sorted by cost
    const route = fromAndDestinationCombination.filter((route) => route.from === selectedStart?.id && route.to === selectedDestination?.id).sort((a, b) => a.cost - b.cost)
    if(!route) return;
    console.log('====>',JSON.stringify(route))
    navigate(`/routes/${JSON.stringify(route)}`)
  }

  return (
    <div style={{height: '100vh'}}>
      <div className="w-full h-full border-2 border-red-500" style={{ padding: '12px 25px', height: headerHeight, backgroundColor: '#CC703D', position: 'relative', borderRadius: '10px 10px 0 0'}}>
        {showHeader && <React.Fragment>
          <div style={{display: 'flex', alignItems: 'center', padding: '30px 0px'}}>
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="profile" style={{ width: '12%', height: '12%', objectFit: 'cover', marginRight: '10px' }} />
            <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
              <p style={{fontSize: '12px', color: '#FFFFFF'}}>Good Morning</p>
              <p style={{fontSize: '16px', color: '#FFFFFF', fontWeight: 'bold'}}>James Maina</p>
            </div>
            <Settings size={30} style={{padding: '5px', backgroundColor: '#FCE8CF', borderRadius: '50%', color: '#CC703D', fontWeight: 'bold'}} />
          </div>
          <h2 style={{fontSize: '30px', color: '#FFFFFF', fontWeight: 'bold', margin: '0px'}}>Navigate Nairobi</h2>
          <h2 style={{fontSize: '30px', color: '#FFFFFF', fontWeight: 'bold', margin: '10px 0 0 0'}}>with Ease!</h2>
        </React.Fragment>}
        {!showHeader && (showFrom || showDestination) && <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px'}}>
          {/* rounded back button */}
          <ChevronLeft onClick={resetAll} size={30} style={{padding: '5px', backgroundColor: '#FCE8CF', borderRadius: '50%', color: '#CC703D', fontWeight: 'bold'}} />
          <p style={{fontSize: '16px', color: '#FFFFFF'}}>Enter your location</p>
        </div>}
        <div style={{ display: 'flex', flexDirection: 'column',position: 'absolute', top, left: '0', right: '0', marginInline: 'auto', width: '90%', backgroundColor: '#FCE8CF', borderRadius: '10px', padding: '10px', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)', }}>
            {showFrom && <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '5px 0px', backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '10px'}}>
              <LogOut size={30} style={{padding: '5px', backgroundColor: '#FCE8CF', borderRadius: '50%', color: '#CC703D', fontWeight: 'bold'}} />
              <div style={{flex: 1}}>
                <p style={{fontSize: '12px', color: '#7b6b6b'}}>From</p>
                <input value={typedPoint} onChange={(e) => setTypedPoint(e.target.value)} type="text" placeholder="Enter Location" onClick={onEnterStartPoint} style={{border: 'none', outline: 'none', width: '100%', fontSize: '12px', color: '#7b6b6b'}} />
              </div>
              {showHeader ? <Crosshair size={30} style={{padding: '5px', backgroundColor: '#FCE8CF', borderRadius: '50%', color: '#CC703D', fontWeight: 'bold'}} /> : <X size={30} style={{padding: '5px', backgroundColor: '#FCE8CF', borderRadius: '50%', color: '#CC703D', fontWeight: 'bold'}} />}
            </div>}
            {showDestination && <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '5px 0px', backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '10px'}}>
              <LogIn size={30} style={{padding: '5px', backgroundColor: '#FCE8CF', borderRadius: '50%', color: '#CC703D', fontWeight: 'bold'}} />
              <div style={{flex: 1}}>
                <p style={{fontSize: '12px', color: '#7b6b6b'}}>Destination</p>
                <input value={destinationTypedPoint} onChange={(e) => setDestinationTypedPoint(e.target.value)} type="text" placeholder="Enter your destination" onClick={onEnterDestination} style={{border: 'none', outline: 'none', width: '100%', fontSize: '12px', color: '#7b6b6b'}} />
              </div>
              {showHeader ? <Crosshair size={30} style={{padding: '5px', backgroundColor: '#FCE8CF', borderRadius: '50%', color: '#CC703D', fontWeight: 'bold'}} /> : <X size={30} style={{padding: '5px', backgroundColor: '#FCE8CF', borderRadius: '50%', color: '#CC703D', fontWeight: 'bold'}} />}
            </div>}
            {showButton && <button onClick={onMatatuSearch} style={{backgroundColor: '#59302C ', color: 'white', padding: '18px', borderRadius: '10px', border: 'none', cursor: 'pointer', margin: '5px 0px', fontSize: '12px' }}>
              Find my Matatu
            </button>}

        </div>
      </div>
      <div style={{backgroundColor: '#FCE8CF', padding: `${showHeader ? '150px' : '50px'} 25px`, height: contentHeight}}>
          {showContent && <React.Fragment>
            <p>Popular Places</p>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0px'}}>
              {types.map((t, index) => {
                const isActive = t === type;
                return (
                  <button
                    key={t}
                    onClick={() => setType(t as typeof type)}
                    style={{
                      backgroundColor: isActive ? '#BF4209' : '#59302C',
                      color: 'white',
                      padding: '5px',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '12px',
                      width: '20%',
                      marginLeft: index === 0 ? '0px' : '10px'
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </React.Fragment>}
          <div style={{overflowY: 'scroll', position: 'relative', height: '160px'}}>
            {loading ? <ThreeCircles
              visible={true}
              height="60"
              width="60"
              color="#CC703D"
              ariaLabel="rings-loading"
              wrapperStyle={{position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)'}}
              wrapperClass=""
              /> :filteredPlaces.length > 0 ? filteredPlaces.map((place) => (
            <div onClick={() => onSelectOption(place)} style={{display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '8px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '12px', marginTop: '10px'}}>
              <Flag size={30} style={{padding: '5px', backgroundColor: '#FCE8CF', borderRadius: '50%', color: '#CC703D', fontWeight: 'bold', marginRight: '10px'}} />
              <div style={{flex: 1}}>
                <p>{place.name}</p>
                <p style={{fontSize: '12px', color: '#7b6b6b', marginTop: '5px'}}>{place.location}</p>
              </div>
              <ChevronRight size={18} style={{ fontWeight: 'bold', marginRight: '10px'}} />
            </div>
          )) : <p>No places found</p>}
          </div>
        
      </div>
      <div style={{zIndex: 5000, backgroundColor: '#FFFFFF', padding: '10px', height: '10%', boxShadow: '0 -1px 10px 0 rgba(0, 0, 0, 0.1)', borderRadius: '0 0 10px 10px'}}>
        {/* bottom tab navigation */}
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <button style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px'}}>
            <Home color='#CC703D' size={22} />
            <p style={{color: '#CC703D', fontWeight: 'bold', fontSize: '14px'}}>Home</p>
          </button>
          <button style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px'}}>
            <Save color='#CC703D' size={22}/>
            <p style={{color: '#CC703D', fontSize: '14px'}}>Saved</p>
          </button>
          <button style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px'}}>
            <HelpCircle color='#CC703D' size={22}/>
            <p style={{color: '#CC703D', fontSize: '14px'}}>Tips</p>
          </button>
          <button style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px'}}>
            <Settings color='#CC703D' size={22}/>
            <p style={{color: '#CC703D', fontSize: '14px'}}>Settings</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
