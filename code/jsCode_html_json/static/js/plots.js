function buildMetadata(county_select) {
  d3.json("JsonAllHomes.json").then((data) => {
    var Davidson = data.Davidson;
    var Williamson = data.Williamson;
    var Rutherford = data.Rutherford;
    var Sumner = data.Sumner;
    var Wilson = data.Wilson;
    var Maury = data.Maury;
    var Robertson = data.Robertson;
    var Dickson = data.Dickson;
    var Cheatham = data.Cheatham;
    var Hickman = data.Hickman;
    var Macon = data.Macon;
    var Smith = data.Smith;
    var Cannon = data.Cannon;
    var Trousdale = data.Trousdale;
    var date = data.date;
  
    var AllHomes = [{id:"Davidson", AllHomes: Davidson},
    {id:"Williamson", AllHomes: Williamson},
    {id:"Rutherford", AllHomes: Rutherford},
    {id:"Sumner", AllHomes: Sumner},
    {id:"Wilson", AllHomes: Wilson},
    {id:"Maury", AllHomes: Maury},
    {id:"Robertson", AllHomes: Robertson},
    {id:"Dickson", AllHomes: Dickson},
    {id:"Cheatham", AllHomes: Cheatham},
    {id:"Hickman", AllHomes: Hickman},
    {id:"Macon", AllHomes: Macon},
    {id:"Smith", AllHomes: Smith},
    {id:"Cannon", AllHomes: Cannon},
    {id:"Trousdale", AllHomes: Trousdale}
    ];
    //console.log(AllHomes);
    // Filter the data for the object with the desired county
    var resultArray = AllHomes.filter(sampleObj => sampleObj.id == county_select);
    var result = resultArray[0];
    var county_allhomes = [];
    var county_date = [];
    for (var i = 0; i < 51; ++i) {
      county_allhomes.push(result.AllHomes[i]);
      county_date.push(date[i]);
    };
    //console.log(resultArray);
    var trace1 = {
      type: "scatter",
      mode: "lines",
      x: county_date,
      y: county_allhomes,
    
      line: {
        color: "blue"
      }
    };

    var data = [trace1];


    var layout = {
      title: `All Homes`,
      xaxis: {
        autorange: true,
        type: "date",
        title: 'Timeline',
        titlefont: {
          family: 'Arial, sans-serif',
          size: 18,
          color: 'grey'
        }
      },
      yaxis: {
        rangemode: 'nonnegative',
        zeroline: true,
        autorange: true,
        type: "linear",
        title: 'House Value',
        titlefont: {
          family: 'Arial, sans-serif',
          size: 18,
          color: 'grey'
        }
      }
      
    };
    

    Plotly.newPlot("bar", data, layout);

  
  });
}
//buildMetadata("Davidson")
function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selCounty");
  // Assign the value of the dropdown menu option to a variable
  var county = selector.property("value");
  // //Use the first sample from the list to build the initial plots
  buildMetadata(county);
}

function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
}


// //Initialize the dashboard
 init();



// function init() {
//     // Grab a reference to the dropdown select element
//     var selector = d3.select("#selDataset");
  
//     // Use the list of sample names to populate the select options
//     d3.json("samples.json").then((data) => {
//       var sampleNames = data.names;
  
//       sampleNames.forEach((sample) => {
//         selector
//           .append("option")
//           .text(sample)
//           .property("value", sample);
//       });
  
//       // Use the first sample from the list to build the initial plots
//       var firstSample = sampleNames[0];
//       buildCharts(firstSample);
//       buildMetadata(firstSample);
//     });
//   }
  
//   function optionChanged(newSample) {
//     // Fetch new data each time a new sample is selected
//     buildCharts(newSample);
//     buildMetadata(newSample);
//   }
  
//   // Initialize the dashboard
//   init();
//(buildMetadata("Davidson"));


      
  
  
  
  // function buildMetadata(sample) {
  //   d3.json("samples.json").then((data) => {
  //     var metadata = data.metadata;
  
  //     // Filter the data for the object with the desired sample number
  //     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
  //     var result = resultArray[0];
  //     // Use d3 to select the panel with id of `#sample-metadata`
  //     var PANEL = d3.select("#sample-metadata");
  
  //     // Use `.html("") to clear any existing metadata
  //     PANEL.html("");
  
  //     // Use `Object.entries` to add each key and value pair to the panel
  //     // Hint: Inside the loop, you will need to use d3 to append new
  //     // tags for each key-value in the metadata.
  //     Object.entries(result).forEach(([key, value]) => {
  //       PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
  //     });
  
  //     // BONUS: Build the Gauge Chart
  //     buildGauge(result.wfreq);
  //   });
  // }
  
  // function buildCharts(sample) {
  //   d3.json("samples.json").then((data) => {
  //     var samples = data.samples;
  //     var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
  //     var result = resultArray[0];
  
  //     var otu_ids = result.otu_ids;
  //     var otu_labels = result.otu_labels;
  //     var sample_values = result.sample_values;
  
  //     // Build a Bubble Chart
  //     var bubbleLayout = {
  //       title: "Bacteria Cultures Per Sample",
  //       margin: { t: 0 },
  //       hovermode: "closest",
  //       xaxis: { title: "OTU ID" },
  //       margin: { t: 30}
  //     };
  //     var bubbleData = [
  //       {
  //         x: otu_ids,
  //         y: sample_values,
  //         text: otu_labels,
  //         mode: "markers",
  //         marker: {
  //           size: sample_values,
  //           color: otu_ids,
  //           colorscale: "Earth"
  //         }
  //       }
  //     ];
  
  //     Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  
  //     var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
  //     var barData = [
  //       {
  //         y: yticks,
  //         x: sample_values.slice(0, 10).reverse(),
  //         text: otu_labels.slice(0, 10).reverse(),
  //         type: "bar",
  //         orientation: "h",
  //       }
  //     ];
  
  //     var barLayout = {
  //       title: "Top 10 Bacteria Cultures Found",
  //       margin: { t: 30, l: 150 }
  //     };
  
  //     Plotly.newPlot("bar", barData, barLayout);
  //   });
  // }
  
  // function init() {
  //   // Grab a reference to the dropdown select element
  //   var selector = d3.select("#selDataset");
  
  //   // Use the list of sample names to populate the select options
  //   d3.json("samples.json").then((data) => {
  //     var sampleNames = data.names;
  
  //     sampleNames.forEach((sample) => {
  //       selector
  //         .append("option")
  //         .text(sample)
  //         .property("value", sample);
  //     });
  
  //     // Use the first sample from the list to build the initial plots
  //     var firstSample = sampleNames[0];
  //     buildCharts(firstSample);
  //     buildMetadata(firstSample);
  //   });
  // }
  
  // function optionChanged(newSample) {
  //   // Fetch new data each time a new sample is selected
  //   buildCharts(newSample);
  //   buildMetadata(newSample);
  // }
  
  // // Initialize the dashboard
  // init();
