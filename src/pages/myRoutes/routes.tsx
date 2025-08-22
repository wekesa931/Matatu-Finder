import { matatuRoutes, MatatuRoute, places, FromAndDestinationCombination } from '@/data';
import { Airplay, ArrowDownRight, ArrowRight, ChevronLeft, Circle, Clock, Crosshair, DollarSign, Film, Flag, Link2, Map, MapPin, Target, Truck, Watch } from 'feather-icons-react';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Routes = () => {
    // get the id from the url
    const { id } = useParams();
    const allRoutes: FromAndDestinationCombination[] = JSON.parse(id as string);
    const mainRoute = allRoutes[0];
    const secondaryRoutes = [matatuRoutes[0], matatuRoutes[1], matatuRoutes[2]];

    // const mainDestination = places.find((place) => place.id === mainRoute.to);
    // const mainDestination = places.find((place) => place.id === id);
    // const mainRoute = matatuRoutes.find((route) => route.mainDestination === id);
    // const secondaryRoutes = matatuRoutes.filter((route) => route.secondaryDestination.includes(id as string));
    const [expandedView, setExpandedView] = useState<boolean>(false);

    const start = places.find((place) => place.id === allRoutes[0].from);
    const destination = places.find((place) => place.id === allRoutes[0].to);
  const navigate = useNavigate();

  const backHome = () => {
    navigate('/');
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh',}}>
        <div style={{ padding: '12px 25px', height: '20%', backgroundColor: '#CC703D', position: 'relative', borderRadius: '10px 10px 0 0'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px'}}>
            <ChevronLeft onClick={backHome} size={30} style={{padding: '5px', backgroundColor: '#FCE8CF', borderRadius: '50%', color: '#CC703D', fontWeight: 'bold'}} />
            <p style={{fontSize: '16px', color: '#FFFFFF'}}>Available routes</p>
            </div>
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: '14px', color: '#FFFFFF', alignItems: 'center'}}>
                <p>{start?.name}</p>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Flag size={20} style={{color: '#FFFFFF', fontWeight: 'bold', marginRight: '10px'}} />
                    ---------
                    <MapPin size={20} style={{color: '#FFFFFF', fontWeight: 'bold', marginLeft: '10px'}} />
                </div>
                <p>{destination?.name}</p>
            </div>
        </div>
        <div style={{ padding: '12px 25px', height: '80%', backgroundColor: '#FCE8CF', position: 'relative', borderRadius: '0 0 10px 10px', overflowY: 'scroll'}}>
            {/* <div style={{backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '10px'}}> */}
                <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '10px', borderBottom: '1px dotted #CC703D'}}>
                    <Film size={18} style={{color: '#59302C', fontWeight: 'bold', marginRight: '5px'}} />
                    <div style={{flex: 1}}><p style={{color: '#59302C', fontSize: '14px'}}>{mainRoute?.name}</p></div>
                    <p style={{color: '#59302C', fontSize: '14px'}}>{mainRoute?.routeNo}</p>
                    
                </div>
                {/* <div style={{width: '100%', marginTop: '15px', marginBottom: '15px', borderTop: '1px dotted #CC703D'}}></div> */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '10px', borderTop: '1px dotted #CC703D', backgroundColor: '#FFFFFF', padding: '10px'}}>
                <div style={{display: 'flex', alignItems: 'center' }}>
                    <MapPin size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '5px'}} />
                    <div style={{flex: 1}}><p style={{color: '#7b6b6b', fontSize: '14px'}}>Location</p></div>
                    <p style={{color: 'black', fontSize: '12px', fontWeight: 'bold'}}>{mainRoute?.from}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                    <Watch size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '5px'}} />
                    <div style={{flex: 1}}><p style={{color: '#7b6b6b', fontSize: '14px'}}>Travel Time</p></div>
                    <p style={{color: 'black', fontSize: '12px', fontWeight: 'bold'}}>{mainRoute?.time}|{mainRoute?.travelMins} min</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                    <DollarSign size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '5px'}} />
                    <div style={{flex: 1}}><p style={{color: '#7b6b6b', fontSize: '14px'}}>Estimated Fare</p></div>
                    <p style={{color: 'black', fontSize: '12px', fontWeight: 'bold'}}>{mainRoute?.cost} Ksh</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                    <Clock size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '5px'}} />
                    <div style={{flex: 1}}><p style={{color: '#7b6b6b', fontSize: '14px'}}>Pick Hours</p></div>
                    <p style={{color: 'black', fontSize: '12px', fontWeight: 'bold'}}>{mainRoute?.peakTime} Ksh</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                    <Link2 size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '5px'}} />
                    <div style={{flex: 1}}><p style={{color: '#7b6b6b', fontSize: '14px'}}>Connections</p></div>
                    <p style={{color: 'black', fontSize: '12px', fontWeight: 'bold'}}>1</p>
                </div>
            </div>

            {secondaryRoutes.map((route: MatatuRoute) => (
                // click to expand
                <div onClick={() => setExpandedView(true)} key={route.id} style={{backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '10px', marginTop: '10px'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Film size={16} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '10px'}} />
                        <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
                            <p style={{color: '#7b6b6b', fontSize: '12px', width: '100px', fontWeight: 'bold'}}>{route.name}</p>
                            <p style={{color: 'black', fontSize: '12px', fontWeight: 'bold', marginLeft: '20PX'}}>{route.route}</p>
                        </div>
                        <Link2 size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '5px'}} />
                        <p style={{color: 'black', fontSize: '10px', fontWeight: 'bold'}}>1</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                        <Watch size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '5px'}} />
                        <div style={{flex: 1}}><p style={{color: '#7b6b6b', fontSize: '12px'}}>Travel Time</p></div>
                        <p style={{color: 'black', fontSize: '12px', fontWeight: 'bold'}}>{route?.travelMins} min</p>
                    </div>
                    <div style={{display: 'flex', marginTop: '10px' }}>
                        <Crosshair size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '15px'}} />
                        <ArrowRight size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '15px'}} />
                        <Truck size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '15px'}} />
                        <p style={{color: '#CC703D', fontSize: '12px', fontWeight: 'bold', marginRight: '15px'}}>{route.route}</p>
                        <ArrowRight size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '15px'}} />
                        <MapPin size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '15px'}} />
                    </div>
                </div>
            ))}
            {expandedView && <div style={{position: 'absolute', top: '10px', backgroundColor: '#FFFFFF', padding: '14px', borderRadius: '10px', width: '88%', height: '72vh'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Crosshair size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '5px'}} />
                        <p style={{color: '#7b6b6b', fontSize: '12px', fontWeight: 'bold'}}>Kencom House</p>
                    </div>
                    <p style={{color: 'black', fontSize: '12px', fontWeight: 'bold'}}>10:00am</p>
                </div>
                <div style={{ borderLeft: '4px dotted #CC703D', marginTop: '10px', paddingLeft: 14, marginLeft: '5px'}}>
                    <p style={{color: '#7b6b6b', fontSize: '12px', }}>Moi Avenue, City Hall Way, Nairobi</p>
                    <div style={{borderTop: '4px dotted #CC703D', margin: '20px 0'}}/>
                    <p style={{color: '#7b6b6b', fontSize: '12px', fontWeight: 'bold'}}>Walk</p>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                        <Clock size={14} style={{color: '#CC703D', fontWeight: 'bold'}} />
                        <p style={{color: '#7b6b6b', fontSize: '12px', marginLeft: '10px'}}>6 min, 400m</p>
                    </div>
                    <div style={{borderTop: '4px dotted #CC703D', margin: '20px 0'}}/>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Circle size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '5px'}} />
                        <p style={{color: '#7b6b6b', fontSize: '12px', fontWeight: 'bold'}}>Tusker/Ronald Ngala</p>
                    </div>
                    <p style={{color: 'black', fontSize: '12px', fontWeight: 'bold'}}>10:06am</p>
                </div>
                <div style={{ borderLeft: '4px solid #CC703D', marginTop: '10px', paddingLeft: 14, marginLeft: '5px'}}>
                    <div style={{borderTop: '4px dotted #CC703D', margin: '20px 0'}}/>
                    <p style={{color: '#7b6b6b', fontSize: '12px', fontWeight: 'bold'}}>Ummoinner / Utimo  45A</p>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                        <Clock size={14} style={{color: '#CC703D', fontWeight: 'bold'}} />
                        <p style={{color: '#7b6b6b', fontSize: '12px', marginLeft: '10px'}}>50 min, 20km</p>
                    </div>
                    <div style={{borderTop: '4px dotted #CC703D', margin: '20px 0'}}/>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Circle size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '5px'}} />
                        <p style={{color: '#7b6b6b', fontSize: '12px', fontWeight: 'bold'}}>Conner Junction</p>
                    </div>
                    <p style={{color: 'black', fontSize: '12px', fontWeight: 'bold'}}>11:00am</p>
                </div>
                <div style={{ borderLeft: '4px dotted #CC703D', marginTop: '10px', paddingLeft: 14, marginLeft: '5px'}}>
                    <div style={{borderTop: '4px dotted #CC703D', margin: '20px 0'}}/>
                    <p style={{color: '#7b6b6b', fontSize: '12px', fontWeight: 'bold'}}>Walk</p>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                        <Clock size={14} style={{color: '#CC703D', fontWeight: 'bold'}} />
                        <p style={{color: '#7b6b6b', fontSize: '12px', marginLeft: '10px'}}>6 min, 400m</p>
                    </div>
                    <div style={{borderTop: '4px dotted #CC703D', margin: '20px 0'}}/>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <MapPin size={14} style={{color: '#CC703D', fontWeight: 'bold', marginRight: '5px'}} />
                        <p style={{color: '#7b6b6b', fontSize: '12px'}}>Umoja 1</p>
                    </div>
                    <p style={{color: 'black', fontSize: '12px', fontWeight: 'bold'}}>11:10am</p>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default Routes;