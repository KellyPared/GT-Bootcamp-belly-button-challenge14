var margin  = {top: 20, right: 20, bottom: 100, left: 60},
        width   = 600 - margin.left - margin.right,
        height  = 400 - margin.top - margin.bottom,
        x       = d3.scale.ordinal().rangeRoundBands([0,width], 0.5),
        y       = d3.scale.linear().range([height,0]);

        var xAxis   = d3.svg.axis()
        .scale(x)
        .orient("bottom");


var yAxis   = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(5)
      .innerTickSize(-width)
      .outerTickSize(0)
      .tickPadding(10);

d3.json("data/samples.json", function (data)
{
  x.domain(data.map(function (d)
  {
      return d.name;
  }));

  y.domain([0, d3.max(data, function (d)
  {
      return d.wc;
  })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0, " + height + ")")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "middle")
      .attr("dx", "-0.5em")
      .attr("dy", "-.55em")
      .attr("y", 30)
      .attr("transform", "rotate(0)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", "0.8em")
      .attr("text-anchor", "end")
      .text("Word Count");

  svg.selectAll("bar")
      .data(data)
      .enter()
      .append("rect")
      .style("fill", "orange")
      .attr("x", function(d)
      {
          return x(d.name);
      })
      .attr("width", x.rangeBand())
      .attr("y", function (d)
      {
          return y(d.wc);
      })
      .attr("height", function (d)
      {
          return height - y(d.wc);
      })
      {
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", y.range()[1])
      .attr("font-family", "sans-serif")
      .attr("font-size", "10")
      .attr("text-anchor", "end");

  const bar = svg.selectAll("g")
    .data(data)
    .join("g")
      .attr("transform", (d, i) => `translate(0,${y(i)})`);

  bar.append("rect")
      .attr("fill", "steelblue")
      .attr("width", x)
      .attr("height", y.bandwidth() - 1);

  bar.append("text")
      .attr("fill", "white")
      .attr("x", d => x(d) - 3)
      .attr("y", (y.bandwidth() - 1) / 2)
      .attr("dy", "0.35em")
      .text(d => d);

  return svg.node();
}

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