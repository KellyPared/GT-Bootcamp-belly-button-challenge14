# app.py

import pandas as pd
from dash import Dash, dcc, html
import json

# Reading json file
#/Users/kelly.paredes/Desktop/belly-button-challenge14/fetch_data_version/data/samples.json
json_file_path = "data/samples.json"
with open(json_file_path) as f:
  data = json.load(f)
  data.sort_values(by="names")


app = Dash(__name__)
# data = ()
#     .query("type == 'conventional' and region == 'Albany'")
#     .assign(Date=lambda data: pd.to_datetime(data["Date"], format="%Y-%m-%d"))
#     .sort_values(by="Date")

# App layout
app.layout = html.Div(#defining the parent component, html.Div
    children=[ #equivalent to the <div>, <h1>, and <p> HTML tags
        html.H1(children="Belly Button Biodiversity Dashboard"),
        html.P(
            children=(
                "Use the interactive charts belwo to explore the dataset"
            ),
        ),
        dcc.Graph(
            figure={
                "data": [
                    {
                        "x": data["names"],
                        "y": data["otu_ids"],
                        "type": "lines",
                    },
                ],
                "layout": {"title": "OTU-ids"},
            },
        ),
        dcc.Graph(
            figure={
                "data": [
                    {
                        "x": data["names"],
                        "y": data["otu_ids"],
                        "type": "lines",
                    },
                ],
                "layout": {"title": "line Graph"},
            },
        ),
    ]
)


if __name__ == "__main__":
  app.run_server(debug=True)