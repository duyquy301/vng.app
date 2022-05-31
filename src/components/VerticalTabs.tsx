import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { t } = useTranslation("navigation");
  return (
    <Tabs
      orientation="vertical"
      variant="standard"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{
        ".MuiTabs-indicator": {
          left: 0,
        },
      }}
    >
      <Tab
        label={t("overview")}
        {...a11yProps(0)}
        sx={{
          alignItems: "flex-start",
        }}
      />
      <Tab
        label={t("customer")}
        {...a11yProps(1)}
        sx={{
          alignItems: "flex-start",
        }}
      />
      <Tab
        label={t("messenger")}
        {...a11yProps(2)}
        sx={{
          alignItems: "flex-start",
        }}
      />
      <Tab
        label={t("bill")}
        {...a11yProps(3)}
        sx={{
          alignItems: "flex-start",
        }}
      />
      <Tab
        label={t("template")}
        {...a11yProps(4)}
        sx={{
          alignItems: "flex-start",
        }}
      />
    </Tabs>
  );
};

export default VerticalTabs;
