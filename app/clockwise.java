import com.fasterxml.jackson.databind.JsonNode;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.LinearRing;

import java.util.List;

public class GeoJSONBooleanClockwise {

    /**
     * Determines if a GeoJSON LineString or ring coordinates are clockwise.
     *
     * @param line GeoJSON Feature, LineString, or a list of coordinates representing a ring
     * @return true if clockwise, false otherwise
     * @throws Exception if the input is not a valid LineString or ring
     */
    public static boolean booleanClockwise(JsonNode line) throws Exception {
        // Extract coordinates from GeoJSON or list
        Coordinate[] coordinates = extractCoordinates(line);

        // Create a LinearRing using JTS
        GeometryFactory geometryFactory = new GeometryFactory();
        LinearRing ring = geometryFactory.createLinearRing(coordinates);

        // Use JTS isCCW method to determine clockwise direction
        return !ring.isCCW(); // isCCW means counter-clockwise, so we negate it for clockwise
    }

    private static Coordinate[] extractCoordinates(JsonNode line) throws Exception {
        List<JsonNode> coords;
        if (line.has("geometry") && line.get("geometry").has("coordinates")) {
            // GeoJSON Feature or LineString
            coords = line.get("geometry").get("coordinates").elements().toList();
        } else if (line.isArray()) {
            // List of coordinates
            coords = line.elements().toList();
        } else {
            throw new Exception("Input must be a GeoJSON Feature, LineString, or a list of coordinates.");
        }

        Coordinate[] coordinates = new Coordinate[coords.size()];
        for (int i = 0; i < coords.size(); i++) {
            JsonNode coord = coords.get(i);
            coordinates[i] = new Coordinate(coord.get(0).asDouble(), coord.get(1).asDouble());
        }
        return coordinates;
    }
}
