function XMLWriter(encoding, version) {
    if (encoding)
        this.encoding = encoding;
    if (version)
        this.version = version;
};
(function () {
    XMLWriter.prototype = {
        encoding: 'ISO-8859-1',// what is the encoding
        version: '1.0', //what xml version to use
        formatting: 'indented', //how to format the output (indented/none)  ?
        indentChar: '\t', //char to use for indent
        indentation: 1, //how many indentChar to add per level
        newLine: '\n', //character to separate nodes when formatting
        //start a new document, cleanup if we are reusing
        WSD: function (standalone) { //writeStartDocument
            this.close();//cleanup
            this.stack = [];
            //this.standalone = standalone;
        },
        //get back to the root
        WED: function () {//writeEndDocument
            this.active = this.root;
            this.stack = [];
        },
        //set the text of the doctype
        writeDocType: function (dt) {
            this.doctype = dt;
        },
        //start a new node with this name, and an optional namespace
        WSE: function (name, ns) {//writeStartElement
            if (ns)//namespace
                name = ns + ':' + name;

            var node = { n: name, a: {}, c: [] };//(n)ame, (a)ttributes, (c)hildren

            if (this.active) {
                this.active.c.push(node);
                this.stack.push(this.active);
            } else
                this.root = node;
            this.active = node;
        },
        //go up one node, if we are in the root, ignore it
        WEE: function () {//writeEndElement
            this.active = this.stack.pop() || this.root;
        },
        //add an attribute to the active node
        WAS: function (name, value) {//writeAttributeString
            if (this.active)
                this.active.a[name] = value;
        },
        //add a text node to the active node
        WS: function (text) {
            if (this.active)
                this.active.c.push(text);
        },
        //shortcut, open an element, write the text and close
        WES: function (name, text, ns) {//writeElementString
            this.WSE(name, ns);
            this.WS(text);
            this.WEE();
        },
        //add a text node wrapped with CDATA
        writeCDATA: function (text) {
            this.WS('<![CDATA[' + text + ']]>');
        },
        //add a text node wrapped in a comment
        writeComment: function (text) {
            this.WS('<!-- ' + text + ' -->');
        },
        //generate the xml string, you can skip closing the last nodes
        flush: function () {
            if (this.stack && this.stack[0])//ensure it's closed
                this.WED();

            var
                chr = '', indent = '', num = this.indentation,
                formatting = this.formatting.toLowerCase() == 'indented',
                buffer = '<?xml version="' + this.version + '" encoding="' + this.encoding + '"';

            if (this.standalone !== 'undefined')
                // buffer += ' standalone="' + !!this.standalone + '"';
                buffer += ' ?>';

            buffer = [buffer];

            if (this.doctype && this.root)
                buffer.push("\'");

            if (formatting) {
                while (num--)
                    chr += this.indentChar;
            }

            if (this.root)//skip if no element was added
                format(this.root, indent, chr, buffer);

            return buffer.join(formatting ? this.newLine : '');
        },
        //cleanup, don't use again without calling startDocument
        close: function () {
            if (this.root)
                clean(this.root);
            this.active = this.root = this.stack = null;
        },
        /*  getDocument: window.ActiveXObject
              ? function () { //MSIE
                  var doc = new ActiveXObject('Microsoft.XMLDOM');
                  doc.async = false;
                  doc.loadXML(this.flush());
                  return doc;
              }
              : function () {// Mozilla, Firefox, Opera, etc.
                  return (new DOMParser()).parseFromString(this.flush(), 'text/xml');
              }
              */
    };

    //utility, you don't need it
    function clean(node) {
        var l = node.c.length;
        while (l--) {
            if (typeof node.c[l] == 'object')
                clean(node.c[l]);
        }
        node.n = node.a = node.c = null;
    };

    //utility, you don't need it
    function format(node, indent, chr, buffer) {
        var
            xml = indent + '<' + node.n,
            nc = node.c.length,
            attr, child, i = 0;

        for (attr in node.a)
            xml += ' ' + attr + '="' + node.a[attr] + '"';

        xml += nc ? '>' : ' />';

        buffer.push(xml);

        if (nc) {
            do {
                child = node.c[i++];
                if (typeof child == 'string') {
                    if (nc == 1)//single text node
                        return buffer.push(buffer.pop() + child + '</' + node.n + '>');
                    else //regular text node
                        buffer.push(indent + chr + child);
                } else if (typeof child == 'object') //element node
                    format(child, indent + chr, chr, buffer);
            } while (i < nc);
            buffer.push(indent + '</' + node.n + '>');
        }
    };

})();

var IsGo = function (valObject) {
    if (typeof valObject === 'undefined') {
        return false;
    };
    if (valObject == null) {
        return false;
    };

    if (valObject.length === 0) {
        return false;
    };
    return true;
};

exports.XMLWriter = XMLWriter;
