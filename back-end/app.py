import pandas as pd
import math
from flask import Flask,jsonify,request
from flask_cors import CORS,cross_origin


app = Flask(__name__)
CORS(app)

gamesdata = pd.read_csv("gamesdata.csv", index_col = 0)
embedding_matrix = pd.read_csv("embedding_item_dist.csv")

def create_item_dict(df,id_col,name_col):
    item_dict ={}
    for i in range(df.shape[0]):
        item_dict[(df.loc[i,id_col])] = df.loc[i,name_col]

    return item_dict

games_dict = create_item_dict(df = gamesdata, id_col = 'id', name_col = 'title')

dict_items = games_dict.items()
print(list(dict_items)[:100])
value_list = list(games_dict.values())
key_list = list(games_dict.keys())

games_master_data = [item for item in value_list if not(pd.isnull(item))]


def get_item_recs(item_id, n_items = 6):
    recommended_items = list(pd.Series(embedding_matrix.loc[item_id,:]. \
                                  sort_values(ascending = False).head(n_items+1). \
                                  index[1:n_items+1]))
    return recommended_items


@app.post("/test-id")
@cross_origin()
def test():
    req = request.get_json()
    rec_items = get_item_recs(item_id=req["item_id"])

    return_list = []

    return_list.append(games_dict[req["item_i"]])


    for item in rec_items:
            return_list.append(games_dict[int(item)])

    return jsonify(return_list)



@app.post("/predict-game")
@cross_origin()
def hello():
    req = request.get_json()
    position = value_list.index(req["item_name"])
    rec_items = get_item_recs(item_id=position)

    return_list = []


    for item in rec_items:
            return_list.append(games_dict[int(item)])

    return jsonify(return_list)

@app.get("/games")
@cross_origin()
def getGames():

    return jsonify(games_master_data)



if(__name__ == "main"):
    app.run(debug=True)

