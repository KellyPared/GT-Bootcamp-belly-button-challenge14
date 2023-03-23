samplesData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

const dataPromise = d3.json(samplesData)
console.log(dataPromise)

function init(){
  //helps us to populate the dropmenu

  var data = d3.json(samplesData).then(function(data) {
    console.log(data)
          //Create a Dropdown menu - top 10 OTU's
          var names = data.names;
            console.log(data.names);
            // populate the dropdown menu items ??? How do I select only 10????
            var dropdownMenu = d3.select('#selDataset');  // id="selDataset"
              // define the varaiable names for the dropdown menu -check the log. 
              //function is triggered (option)
            names.forEach(function(name){dropdownMenu.append('option').text(name).property('value')});
            plots(names[0]);
            demographic_info(names[0]);
           //only gets executed once
  });
}
//this function will make the id change all the plots.
function optionChanged(id) {
  plots(id);
  demographic_info(id);
}

function demographic_info(menu_id) {
  
  var data = d3.json(samplesData).then(function(data) {
    console.log(data)
        var metadata = data.metadata;
        //grab the tags
        var metaTag_appended = d3.select('#sample-metadata');  // id="selDataset"
        //resets the tag and populate with what is pulled
        metaTag_appended.html("")

        //write a filter function to select the id from meta.
        var filtered_metadata = metadata.filter(x => x.id==menu_id)[0]
        console.log(filtered_metadata)
        
        //this updates the menu item and sets the metadata 
        Object.entries(filtered_metadata).forEach(entry => {
          const [key, value] = entry;
          // console.log(key, value);
          metaTag_appended.append('h5').text(`${key}:${value}`)
        });

           
  });

}
function plots(menu_id) {
  //three plots
  var data = d3.json(samplesData).then(function(data) {
    console.log(data)
        var metadata = data.metadata;
        //grab the tags

        //write a filter function to select the id from meta.
        var filtered_metadata = metadata.filter(x => x.id==menu_id)[0]
        console.log(filtered_metadata)
        
        var samplesData = data.samples;
        //write a filter function to select the samples data 
        var filtered_samples = samplesData.filter(x => x.id==menu_id)[0]
        console.log(filtered_samples)
        
        //get the values for the y bar chart and have it change the init_id
        var otuIds = filtered_samples.otu_ids;
        console.log(otuIds);

        //get the values for text hover data otu_labels
        var otu_labels = filtered_samples.otu_labels;
        console.log(otu_labels);

        washing_frequency = filtered_metadata.wfreq;

        //get the values for x but need to use a filter.
        var sample_values = filtered_samples.sample_values;
        console.log(sample_values)

        var bardata = [{
          y: otuIds.slice(0,10).map(x => `OTU ${x}`).reverse(),
          x: sample_values.slice(0,10).reverse(),
          type: 'bar',
          orientation: 'h',
          text: otu_labels.slice(0,10).reverse(),
          marker: {
            color: 'rgb(0,71,171)'
          }
        }];

        var barlayout = {
          title: 'Top 10 OTUs found in Individual',
        };
        Plotly.newPlot('bar', bardata, barlayout);

        var bubble_graph = [{
          x: otuIds,
          y: sample_values,
          text: otu_labels,
          mode: 'markers',
          marker: {
            color: otuIds,
            size: sample_values
          }
        }];
      
        var bubble_layout = {
          title: 'Sample Values of otu_ids',
      
        };
        
        Plotly.newPlot('bubble', bubble_graph, bubble_layout);
         
        
        var guage_data = [
          {
            domain: washing_frequency,
            value: 270,
            title: { text: "Belly Button Washing Frequency" },
            type: "indicator",
            mode: "gauge+number"
          }
        ];
        
        var guage_layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        Plotly.newPlot('guage', gauge_data, guage_layout);
  });

}

init()