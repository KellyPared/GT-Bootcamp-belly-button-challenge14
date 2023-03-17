samples_url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//promise
const dataPromise = d3.json(samples_url)

//console
console.log(dataPromise)
d3.json(samples_url).then(function (samples_data){
    console.log(samples_data);



// horizontal bar chart w/ a dropdown menu to display the top 10 OTUs found in that individual.
var bar_data = [{
    type: 'bar',
    x: otu_ids,
    y: ['giraffes', 'orangutans', 'monkeys'],
    orientation: 'h'
  }];
  
  Plotly.newPlot('bar', bar_data);

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
