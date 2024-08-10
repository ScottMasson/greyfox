const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function (req, res) {
    res.render('index', {  
        title: 'Home'
    });
});

app.get('/docs', function (req, res) {
    res.render('docs/index', {  
        title: 'Docs'
    });
});

/** 
 ** Basic
 */

app.get('/docs/basic/config', function (req, res) {
    res.render('docs/basic-config', {  
        title: 'Config',
        datas: {
            builtIn: ['red','green','yellow','blue','black','gray'],
            theme: {
                mains: [
                    {name:'main',contrast:'white'},
                    {name:'highlight',contrast:'white'}
                ],
                texts: [
                    {'name':'text-big','contrast':'white'},
                    {'name':'text-middle','contrast':'white'},
                    {'name':'text-small','contrast':'white'},
                    {'name':'text-active','contrast':'black'},
                    {'name':'text-disabled','contrast':'white'}
                ],
                border: [
                    {'name':'border','contrast':'white'},
                    {'name':'border-hover','contrast':'white'}
                ],
                background: [
                    {'name':'background-color','contrast':'black'},
                    {'name':'background-color-hover','contrast':'black'},
                    {'name':'background-color-active','contrast':'black'},
                    {'name':'background-color-disabled','contrast':'black'},
                    {'name':'background-mask','contrast':'white'}
                ]
            }
        }
    });
});
app.get('/docs/basic/icon', function (req, res) {
    res.render('docs/basic-icon', {  
        title: 'Icons'
    });
});

app.get('/docs/basic/font', function (req, res) {
    res.render('docs/basic-font', {  
        title: 'Font',
        datas: [
            {name: 'baskerville-old-face',value: 'baskerville old face'},
            {name: 'Croogla-4F',value: 'Croogla 4F'},
            {name: 'gotham-thin',value: 'Gotham Thin'},
            {name: 'impact-2',value: 'impact 2'},
            {name: 'PFDinTextPro-XThin',value: 'PF DIN Text Pro XThin'},
            {name: 'UniSansThin',value: 'Uni Sans Thin'}
        ]
    });
});

/** 
 ** Layout
 */

app.get('/docs/layout/screen', function (req, res) {
    res.render('docs/layout-screen', {  
        title: 'Screen'
    });
});
app.get('/docs/layout/grid', function (req, res) {
    res.render('docs/layout-grid', {  
        title: 'Grid'
    });
});
app.get('/docs/layout/flexible', function (req, res) {
    res.render('docs/layout-flexible', {  
        title: 'Flexible'
    });
});
app.get('/docs/layout/float', function (req, res) {
    res.render('docs/layout-float', {  
        title: 'Float',
        datas: {
            claim: ['0','50','100','300','500','1000','5000'],
            settlement: ['Alipay','PayPal','Mastercard','Visa','Stripe','AmericanExpress']
        }
    });
});

app.get('/docs/layout/terminal', function (req, res) {
    res.render('docs/layout-terminal', {  
        title: 'Terminal'
    });
});



/** 
 ** Editor
 */

app.get('/docs/editor/CodeMirror', function (req, res) {
    res.render('docs/editor-CodeMirror', {  
        title: 'CodeMirror'
    });
});
app.get('/docs/editor/markdown', function (req, res) {
    res.render('docs/editor-markdown', {  
        title: 'Markdown'
    });
});
app.get('/docs/editor/summernote', function (req, res) {
    res.render('docs/editor-summernote', {  
        title: 'Summernote'
    });
});

/** 
 ** Elements
 */

app.get('/docs/elements/button', function (req, res) {
    res.render('docs/elements-button', {  
        title: 'Button'
    });
});
app.get('/docs/elements/header', function (req, res) {
    res.render('docs/elements-header', {  
        title: 'Header'
    });
});
app.get('/docs/elements/message', function (req, res) {
    res.render('docs/elements-message', {  
        title: 'Message'
    });
});
app.get('/docs/elements/image', function (req, res) {
    res.render('docs/elements-image', {  
        title: 'Image'
    });
});
app.get('/docs/elements/float', function (req, res) {
    res.render('docs/elements-float', {  
        title: 'Float'
    });
});
app.get('/docs/elements/label', function (req, res) {
    res.render('docs/elements-label', {  
        title: 'Label'
    });
});
app.get('/docs/elements/loader', function (req, res) {
    res.render('docs/elements-loader', {  
        title: 'Loader'
    });
});
app.get('/docs/elements/pagination', function (req, res) {
    res.render('docs/elements-pagination', {  
        title: 'Pagination'
    });
});

app.get('/docs/component/date', function (req, res) {
    res.render('docs/component-date', {  
        title: 'Date'
    });
});

app.get('/docs/collections/breadcrumb', function (req, res) {
    res.render('docs/collections-breadcrumb', {  
        title: 'Breadcrumb'
    });
});
app.get('/docs/collections/form', function (req, res) {
    res.render('docs/collections-form', {  
        title: 'Form'
    });
});
app.get('/docs/collections/menu', function (req, res) {
    res.render('docs/collections-menu', {  
        title: 'Menu'
    });
});
app.get('/docs/collections/table', function (req, res) {
    res.render('docs/collections-table', {  
        title: 'Table'
    });
});
app.get('/docs/collections/slideshow', function (req, res) {
    res.render('docs/collections-slideshow', {  
        title: 'Slideshow'
    });
});
app.get('/docs/collections/chart', function (req, res) {
    res.render('docs/collections-chart', {  
        title: 'Chart'
    });
});

app.listen(6001, function(res) {

    // console.log(res);
 
    global.config = {
        name: 'test',
        menu: {
            top: [
                {"name":"Index","url":"/index"},
                {"name":"Docs","url":"/docs"},
                {"name":"Module","url":"/module"}
            ]
        },
        color: {
            name: ['red','green','yellow','blue','black','gray']
        }
    }
 
    console.log('Listening on port 127.0.0.1:5001');
});