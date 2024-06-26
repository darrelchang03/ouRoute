import { APIProvider, Map, MapCameraChangedEvent} from "@vis.gl/react-google-maps"

function App() {
  return (
    <>
      <div>
        <APIProvider apiKey="">
          <Map
            style={{ width: '100vw', height: '100vh' }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
        </APIProvider>
      </div>

);
    </>
  )
}


export default App