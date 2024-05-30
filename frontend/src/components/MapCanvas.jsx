export default function Map({ API_KEY, latitude, longitude}) {
    return (
        <>
            <script src="https://maps.googleapis.com/maps/api/js?key={API_KEY}&loading=async&libraries=maps&v=beta" defer></script>
            <gmp-map
                // center="{latitude},{longitude}"
                center=""
                zoom="10"
                map-id="DEFAULT_MAP"
                style="height: 400px"
            ></gmp-map>
        </>
    )
}