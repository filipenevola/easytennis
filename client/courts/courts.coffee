Meteor.subscribe('courts')

Template.CourtList.helpers(
  courts: ->
    setTitle(Places.findOne(this._id).name)
    Session.set('placeId', this._id)
    Courts.find({placeId: this._id})
);

Template.CourtRow.helpers(
  my: -> this.user == Meteor.userId()
);

AutoForm.hooks(
  InsertCourt:
    before:
      insert: (doc, template) ->
        doc.placeId = Session.get('placeId')
        doc
);