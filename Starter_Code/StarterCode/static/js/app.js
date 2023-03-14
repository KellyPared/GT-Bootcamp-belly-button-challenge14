url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'
d3.json(url, callback);


var bar_data = [{
    type: 'bar',
    x: otu_ids,
    y: ['giraffes', 'orangutans', 'monkeys'],
    orientation: 'h'
  }];
  
  Plotly.newPlot('bar', bar_data);


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