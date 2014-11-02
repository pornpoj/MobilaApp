angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' },
     { id: 4, name: 'Miss Frizzle' },
      { id: 5, name: 'Miss Frizzle' },
       { id: 6, name: 'Miss Frizzle' },
        { id: 7, name: 'Miss Frizzle' },
         { id: 8, name: 'Miss Frizzle' },
          { id: 9, name: 'Miss Frizzle' },
           { id: 10, name: 'Miss Frizzle' },
            { id: 11, name: 'Miss Frizzle' }

  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
