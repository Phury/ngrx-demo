# Steps

* setup angular
* add bootstrap
* scaffold application
  * features
  * services
* introduce ngrx
  * effects
  * reducers
  * selectors
  * testing with marbles
* add badge pill
* add growl

# Code snippets

Create a new console notification

```
  @Effect({ dispatch: false }) notifySuccess$ = this.actions$.pipe(
    ofType<CardAddedEvent>(CollectionActionTypes.CARD_ADDED),
    map(action => action.card),
    tap(card => console.log(`card ${card.name} added to collection`)),
  );
```


Add a new growl message

```
  tap( card => this.toastr.success(`card ${card.name} added to collection`))
```
    
