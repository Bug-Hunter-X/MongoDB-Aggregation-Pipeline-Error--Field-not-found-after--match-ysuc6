```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {$match: { /* some criteria */ }},
  {$group: {_id: "$field", count: {$sum: 1}}}, //This is incorrect if the field is not in the match stage
  {$sort: {count: -1}},
  {$limit: 10}
]);
```