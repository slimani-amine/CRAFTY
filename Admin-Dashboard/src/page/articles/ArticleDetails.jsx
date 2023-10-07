import React, { useState } from "react";
import "./details.css";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useLocation, useNavigate } from "react-router-dom";
import { Tostify } from "../Tostify/ToastyFy";
import { toast } from "react-toastify";
function ArticleDetails(props) {
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { rowData } = location.state || {}; // Use default empty object if rowData doesn't exist
  console.log(location.state, "sdsd");

  const regles = [
    {
      label: " syntax errors.",
    },
    {
      label: "incorrect formatting.",
    },
    {
      label: "off-topic.",
    },
    {
      label: "offensive content.",
    },
    {
      label: "The article is too short.",
    },
    {
      label: "The article is too long.",
    },
    {
      label: "not well-structured.",
    },
    {
      label: "The article violates copyright laws.",
    },
    {
      label: "Other",
    },
  ];
  const reject = (row) => {
    if (comment.length===0) {
      toast.error("please choose a regle for your reject");
    } else {
      // add axios fn
    }
  };
  const accept = (row) => {
    
    // add axios fn
    navigate("/Articles" );
  };

  return (
    <div className="section_our_solution">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="our_solution_category">
            <div className="solution_cards_box">
              <div className="solution_card">
                <div className="hover_color_bubble"></div>
                <div className="solu_title">
                  <div>{rowData.title}</div>
                </div>
                <div className="solu_description">
                  <p>{rowData.description}</p>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Box
                      sx={{
                        p: "5px",
                        width: "99px",
                        borderRadius: "3px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "space-evenly",
                        cursor: "pointer",
                        backgroundColor: "#5E765E",
                        mr: -80,
                        height: 40,
                      }}
                      onClick={() => {
                        accept(rowData);
                      }}
                    >
                      <Tostify />
                      <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                        <DoneIcon
                          sx={{
                            marginBottom: "-6px",
                          }}
                        />
                        Accept
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        p: "5px",
                        width: "99px",
                        borderRadius: "3px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "space-evenly",
                        cursor: "pointer",
                        backgroundColor: "#8C3A3A",
                        height: 40,
                      }}
                      onClick={() => {
                        reject(rowData);
                      }}
                    >
                      <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                        <CloseIcon
                          sx={{
                            marginBottom: "-6px",
                          }}
                        />
                        Reject
                      </Typography>
                    </Box>
                  </div>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={regles}
                    sx={{
                      width: 450,
                      marginLeft: "27%",
                      marginTop: 5,
                      marginBottom: 50,
                      color: "black",
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Regles" />
                    )}
                    onChange={(event, newValue) => {
                      setComment([
                        ...comment,
                        { id: rowData.id, label: newValue.label },
                      ]);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetails;
