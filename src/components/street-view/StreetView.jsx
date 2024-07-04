import PropTypes from "prop-types";
import { Box, Tabs, Tab, Card, CardContent } from "@mui/material";
import { useState } from "react";
import "./street-view.css";

const GetStreetView = ({ embedUrl }) => {
  return (
    <iframe
      src={embedUrl}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

GetStreetView.propTypes = {
  embedUrl: PropTypes.string.isRequired,
};

const StreetView = ({ embedObject }) => {
  const [value, setValue] = useState(Object.keys(embedObject)[0]);
  const keys = Object.keys(embedObject);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="street-view-container">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="street view tabs"
        sx={{
          "& .MuiTab-root": {
            color: "#002a32", // Theme primary color
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#00c2d1", // Theme accent color
          },
        }}
      >
        {keys.map((key) => (
          <Tab key={key} value={key} label={key} />
        ))}
      </Tabs>
      {keys.map((key) => (
        <Card
          key={key}
          sx={{ display: value === key ? "block" : "none", mt: 2 }}
          className="street-view-card"
        >
          <CardContent>
            <GetStreetView embedUrl={embedObject[key]} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

StreetView.propTypes = {
  embedObject: PropTypes.object.isRequired,
};

export default StreetView;
