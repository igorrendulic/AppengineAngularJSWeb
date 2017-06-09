import os
import webapp2

from google.appengine.ext.webapp import template

        
class RefreshPageHandler(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), 'app/index.html')
        self.response.out.write(template.render(path, {}))

APP = webapp2.WSGIApplication([
    ('/about', RefreshPageHandler),
    ('/contact', RefreshPageHandler),
    ('/', RefreshPageHandler),
], debug=True)