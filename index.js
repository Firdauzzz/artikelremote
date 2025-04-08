const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const supabase = require('./supabase');
const PORT = process.env.PORT || 3000;

//konfigurasi layouts
app.use(expressLayouts)

//konfigurai statis
app.use(express.static(path.join(__dirname, 'public')));

//konfigurasi template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);


app.get("/", async (req, res) => {
    const { data: articles, error } = await supabase
        .from('articles')
        .select('*');

    if (error) {
        console.error('Error fetching articles:', error);
        return res.status(500).send('Error fetching articles');
    }

    const headline = {
        title: "Berita Utama Hari Ini",
        summary: "Ringkasan berita utama yang sedang trending.",
        image: "/images/eth.png" // Pastikan ada gambar di folder public/images
    };

    res.render("index", { title: "Beranda", headline, articles });
});

// About
app.get("/about", (req, res) => {
    res.render("about");
});


//returning string
app.get('/template', (req,res) => {
    res.render('index', {nama: 'daus', message: 'Welcome to Express with EJS!'})
})

app.get('/hello', (req,res) => {
    res.sendFile( path.join (__dirname
        , 'public', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});