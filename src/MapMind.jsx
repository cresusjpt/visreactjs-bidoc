import React, { Component, Fragment } from "react";
import Graph from "vis-react";
import initialGraph from "./data.json";

let options = {
    layout: {
      randomSeed: 2
    },
    nodes: {
      fixed: {
        x: false,
        y: false
      },
      shape: "dot",
      size: 13,
      borderWidth: 1.5,
      borderWidthSelected: 2,
      font: {
        size: 15,
        align: "center",
        bold: {
          color: "#bbbdc0",
          size: 15,
          vadjust: 0,
          mod: "bold"
        }
      }
    },
    edges: {
      width: 0.01,
      color: {
        color: "#D3D3D3",
        highlight: "#797979",
        hover: "#797979",
        opacity: 1.0
      },
      arrows: {
        to: { enabled: true, scaleFactor: 1, type: "arrow" },
        middle: { enabled: false, scaleFactor: 1, type: "arrow" },
        from: { enabled: true, scaleFactor: 1, type: "arrow" }
      },
      smooth: {
        type: "continuous",
        roundness: 0
      }
    },
    groups: {
      Physics: {
        color: {
          background: "#ffffff",
          border: "#acdbae",
          highlight: {
            border: "#acdbae",
            background: "#ffffff"
          },
          hover: {
            border: "#acdbae",
            background: "#ffffff"
          }
        }
      },
      Chemistry: {
        color: {
          background: "#ffffff",
          border: "#f3bd86",
          highlight: {
            border: "#f3bd86",
            background: "#ffffff"
          },
          hover: {
            border: "#f3bd86",
            background: "#ffffff"
          }
        }
      },
      Biology: {
        color: {
          background: "#ffffff",
          border: "#c89dc8",
          highlight: {
            border: "#c89dc8",
            background: "#ffffff"
          },
          hover: {
            border: "#c89dc8",
            background: "#ffffff"
          }
        }
      },
      Mathematics: {
        color: {
          background: "#ffffff",
          border: "#52CBEC",
          highlight: {
            border: "#52CBEC",
            background: "#ffffff"
          },
          hover: {
            border: "#52CBEC",
            background: "#ffffff"
          }
        }
      },
      English: {
        color: {
          background: "#ffffff",
          border: "#c2b59b",
          highlight: {
            border: "#c2b59b",
            background: "#ffffff"
          },
          hover: {
            border: "#c2b59b",
            background: "#ffffff"
          }
        }
      },
      "Logical Reasoning": {
        color: {
          background: "#ffffff",
          border: "#87a6aa",
          highlight: {
            border: "#87a6aa",
            background: "#ffffff"
          },
          hover: {
            border: "#87a6aa",
            background: "#ffffff"
          }
        }
      }
    },
    physics: {
      barnesHut: {
        gravitationalConstant: -30000,
        centralGravity: 1,
        springLength: 70,
        avoidOverlap: 1
      },
      stabilization: { iterations: 2500 }
    },
    interaction: {
      hover: true,
      hoverConnectedEdges: true,
      hoverEdges: true,
      selectable: false,
      selectConnectedEdges: false,
      zoomView: false,
      dragView: false
    }
  };

function MindMap(){
    return (
        <Fragment>
          <div className="vis-react-title">MECADAQ Group Datawarehouse</div>
          <Graph
            graph={this.state.graph}
            style={this.state.style}
            options={options}
            getNetwork={this.getNetwork}
            getEdges={this.getEdges}
            getNodes={this.getNodes}
            events={this.events}
            vis={vis => (this.vis = vis)}
          />
        </Fragment>
      );
}

export default MindMap;