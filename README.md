# Google Appengine AngularJS Example ng-Route avoid 404 on Refresh

From the [Angular Docs](https://docs.angularjs.org/guide/$location) using `$location` with ng-route can have problems loading pages when refreshing the relative link, e.g. /about.  
```
Using this mode requires URL rewriting on server side, basically you have to rewrite all your links to entry point of your application (e.g. index.html). Requiring a <base> tag is also important for this case, as it allows AngularJS to differentiate between the part of the url that is the application base and the path that should be handled by the application.
```

The reason this happens is when you first visit the page (`/about`) the index page wasn't loaded so ng-route has no way of knowing you need to have a `main` page loaded first and route to links from there. 

This is a simple example that solves this problem the right way.

The solution is in `main.py` class.

```
class RefreshPageHandler(webapp2.RequestHandler):
    def get(self, path):
        template_values = {}
    	template = JINJA_ENVIRONMENT.get_template('app/index.html')
        self.response.write(template.render(template_values))

APP = webapp2.WSGIApplication([
    ('/(.*)', RefreshPageHandler),
], debug=True)
```

