samples_url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//promise
const dataPromise = d3.json(samples_url)

//console
console.log(dataPromise)
d3.json(samples_url).then(function (samples_data){
    console.log(samples_data);


    d3.selectAll('h1')
    .style("color", "blue");
    
    // import in data from samples.json url
    // read in the url json
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
    
    // retrieve the data from the url assign data with let
    let data = d3.json(url, function(data) {
      console.log(data);
    })
    
    // loop through data in order to get all the variables.
    for (var i=0; i < data.length; i++) {
      console.log(data[i])
    }
    
    //Create a Dropdown menu - top 10 OTU's
      //  id="selDataset" 
      // select elements from Dropdown
      // define the varaiable names for the dropdown menu -check the log.
      // populate menu items
      //let names = data.names;
     // console.log(names);})
    
    
    //Initialize Plots to start the page - default 
    function init() {
      data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }];
    
     Plotly.newPlot("plot", data);}
    
    // Create a Horizontal Bar Chart
var bar_data = [{
    type: 'bar',
    x: otu_ids,
    y: ['giraffes', 'orangutans', 'monkeys'],
    orientation: 'h'
}];
    
    Plotly.newPlot('bar', bar_data);
    // html id="bar"
    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 30, bottom: 40, left: 90},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
    
    
      // get variable sample_values for bar chart.
      //get otu_ids for the labels on bar chart
      // get otu_labels for hovertext
    
    //Create a bubble chart
      // id="bubble"
      // Use otu_ids for x values
      // Use sample_values for the y values
      // Use sample_values for the marker size
      // Use otu_ids for marker colors
      // Use otu_labels for text values
    // Bubble Chart  
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 11, 12, 13],
      mode: 'markers',
      marker: {
        size: [40, 60, 80, 100]
      }
    }
    
    var bubble_data = [trace1];
    
    var layout = {
      title: 'Marker Size',
      showlegend: false,
      height: 600,
      width: 600
    };
    
    Plotly.newPlot('bubble', bubble_data, layout);
    
    // Make the Demographic Info - sample metadata
    // inidividuals demographic information
    // Display each key-value pair (dictionary) from metadata
      //id
      //ethnicity
      //gender
      //age
      //bbtype
      //wfreq 
    
    //Create a Gauge Chart - weekly washing frequency
      //html id="gauge"
      // values 0-9
    
    //Update all plots when new sample is selected.
    
    
    
    
    
    
      


//bubble chart that displays each sample.
  var trace1 = {
    x: otu_ids,
    y: sample_values,
    mode: 'markers',
    marker: {
      size: sample_values
    }
  };
  
  var bubble_data = [trace1];
  
  var layout = {
    title: 'OTU IDs',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('bubble', bubble_data, layout);


}).catch(console.log('try again'))


