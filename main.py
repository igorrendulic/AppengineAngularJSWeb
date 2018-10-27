import os
import webapp2
import jinja2 #google.ext.webapp.template has been deprecated

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

        
class RefreshPageHandler(webapp2.RequestHandler):
    def get(self, path):
        template_values = {}
    	template = JINJA_ENVIRONMENT.get_template('app/index.html')
        self.response.write(template.render(template_values))

APP = webapp2.WSGIApplication([
    ('/(.*)', RefreshPageHandler),
], debug=True)
