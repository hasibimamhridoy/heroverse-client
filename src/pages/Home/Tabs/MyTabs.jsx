import * as React from "react";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function MyTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://heroverse-toys-server-site.vercel.app/products?cateId=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <h1 className="lg:text-4xl lg:my-16 my-10 text-purple-400 text-center font-semibold">
        Our Avengers!
      </h1>
      <AppBar sx={{ bgcolor: "#010313" }} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab sx={{ color: "white",fontSize:'13px'}} label="Marvel" {...a11yProps(0)} />
          <Tab sx={{ color: "white",fontSize:'13px'  }} label="StarW" {...a11yProps(1)} />
          <Tab sx={{ color: "white",fontSize:'13px' }} label="Transformar" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="h-fit text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-7">
              {products.map((product) => {
                const {
                  category_id,
                  description,
                  name,
                  picture,
                  price,
                  quantity,
                  rating,
                  seller_email,
                  seller_name,
                  sub_category,
                  _id,
                } = product;
                return (
                  <div key={_id}>
                    <div className="w-full max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a >
                        <img
                          className=" rounded-t-lg"
                          src={picture}
                          alt="product image"
                        />
                      </a>
                      <div className="px-5 pb-5 mt-5">
                        <a >
                          <h5 className="text-xl font-semibold text-white  tracking-tight  dark:text-white">
                            {name}
                          </h5>
                        </a>
                        <div className="flex mt-2.5 mb-5">
                          <div className="flex bg-gray-50 px-2 rounded-full items-center">
                            <Rating name="read-only" value={rating} readOnly />
                            <span className="text-center text-black mt-1 ml-2">
                              {rating}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="lg:text-2xl font-bold text-white border py-2 px-3 rounded-full dark:text-white">
                            $ {price}
                          </span>
                          <span className="lg:text-2xl bg-purple-800 font-bold text-white py-2 px-3 rounded-full dark:text-white">
                            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon> {quantity}
                          </span>
                        </div>

                        
                        <Link to={`/productsDetails/${_id}`}>
                            <button
                              type="button"
                              className="text-white w-full mt-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                              View Details
                            </button>
                          </Link>
                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="h-fit text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-7">
              {products.map((product) => {
                const {
                  category_id,
                  description,
                  name,
                  picture,
                  price,
                  quantity,
                  rating,
                  seller_email,
                  seller_name,
                  sub_category,
                  _id,
                } = product;
                return (
                  <div key={_id}>
                    <div className="w-full max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a >
                        <img
                          className=" rounded-t-lg"
                          src={picture}
                          alt="product image"
                        />
                      </a>
                      <div className="px-5 pb-5 mt-5">
                        <a >
                          <h5 className="text-xl font-semibold text-white  tracking-tight  dark:text-white">
                            {name}
                          </h5>
                        </a>
                        <div className="flex mt-2.5 mb-5">
                          <div className="flex bg-gray-50 px-2 rounded-full items-center">
                            <Rating name="read-only" value={rating} readOnly />
                            <span className="text-center text-black mt-1 ml-2">
                              {rating}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="lg:text-2xl font-bold text-white border py-2 px-3 rounded-full dark:text-white">
                            $ {price}
                          </span>
                          <span className="lg:text-2xl bg-purple-800 font-bold text-white py-2 px-3 rounded-full dark:text-white">
                            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon> {quantity}
                          </span>
                        </div>

                        
                        <Link to={`/productsDetails/${_id}`}>
                            <button
                              type="button"
                              className="text-white w-full mt-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                              View Details
                            </button>
                          </Link>
                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div className="h-fit text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-7">
              {products.map((product) => {
                const {
                  category_id,
                  description,
                  name,
                  picture,
                  price,
                  quantity,
                  rating,
                  seller_email,
                  seller_name,
                  sub_category,
                  _id,
                } = product;
                return (
                  <div key={_id}>
                    <div className="w-full max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a >
                        <img
                          className=" rounded-t-lg"
                          src={picture}
                          alt="product image"
                        />
                      </a>
                      <div className="px-5 pb-5 mt-5">
                        <a >
                          <h5 className="text-xl font-semibold text-white  tracking-tight  dark:text-white">
                            {name}
                          </h5>
                        </a>
                        <div className="flex mt-2.5 mb-5">
                          <div className="flex bg-gray-50 px-2 rounded-full items-center">
                            <Rating name="read-only" value={rating} readOnly />
                            <span className="text-center text-black mt-1 ml-2">
                              {rating}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="lg:text-2xl font-bold text-white border py-2 px-3 rounded-full dark:text-white">
                            $ {price}
                          </span>
                          <span className="lg:text-2xl bg-purple-800 font-bold text-white py-2 px-3 rounded-full dark:text-white">
                            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon> {quantity}
                          </span>
                        </div>

                        
                        <Link to={`/productsDetails/${_id}`}>
                            <button
                              type="button"
                              className="text-white w-full mt-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                              View Details
                            </button>
                          </Link>
                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
