# Tenma Video Player Uygulaması

Tenma Video Player, modern web teknolojileri kullanılarak geliştirilmiş, çoklu kaynak desteğine sahip, açık kaynaklı bir video oynatma platformudur. Kullanıcıların çeşitli kaynaklardan video içeriklerine erişmesini ve sorunsuz bir şekilde izlemesini sağlar.

## Öne Çıkan Özellikler

- 🎬 **Çoklu Kaynak Desteği**: Harici JSON konfigürasyonu ile kolayca yeni video kaynakları eklenebilir
- 🌓 **Akıllı Tema Sistemi**: Kullanıcı tercihine göre otomatik gece/gündüz modu
- 🔍 **Gelişmiş Arama**: Anında sonuçlarla etkili içerik keşfi
- ♾️ **Sonsuz Kaydırma**: Kullanıcı dostu içerik keşfi için otomatik sayfa yükleme
- 📱 **Tam Duyarlı Tasarım**: Tüm cihazlarda mükemmel görüntüleme deneyimi
- ⚡ **Performans Optimizasyonu**: Görüntüler için lazy loading ve video detayları için paralel yükleme

## Teknoloji Yığını

- **Tailwind CSS** - Modern ve özelleştirilebilir UI bileşenleri
- **Hls.js** - Adaptif video akışı için HLS desteği
- **Font Awesome** - Zengin ikon seti
- **Intersection Observer API** - Lazy loading ve sonsuz kaydırma için
- **Modern JavaScript (ES6+)** - Async/Await, Promises, Destructuring

## Kurulum ve Kullanım

### Ön Koşullar
- Modern bir web tarayıcısı (Chrome, Firefox, Edge)

### Başlangıç
1. Uygulamayı kullanmak için herhangi bir kurulum gerekmez
2. Doğrudan `index.html` dosyasını tarayıcınızda açın
3. Kaynak seçici menüsünden bir video kaynağı seçin

## Uygulama Mimarisi

### Ana Bileşenler
1. **Kaynak Yönetimi**
   - Harici JSON'dan kaynak yükleme
   - Dinamik kaynak seçici
   - CORS proxy desteği

2. **İçerik Yükleme Sistemi**
   - Sayfalama desteği
   - Paralel detay yükleme (MAX_DETAIL_CONCURRENCY)
   - Video URL çıkarma algoritması (regex, DOM parsing, script analizi)

3. **Kullanıcı Arayüzü**
   - Dinamik kart oluşturma
   - Lazy image loading
   - Intersection Observer ile görünürlük yönetimi

4. **Video Oynatıcı**
   - HLS.js ile adaptif akış desteği
   - Responsive tasarım
   - Poster ve kontroller

### Performans Optimizasyonları
- **Lazy Loading:** Görüntüler sadece görünür alana girdiğinde yüklenir
- **Paralel Fetching:** Video detayları eşzamanlı olarak yüklenir
- **Önbellekleme:** Tekrar ziyaretlerde tema tercihi hatırlanır
- **Verimli DOM:** Sadece görünür öğeler işlenir

## Katkıda Bulunma

Katkılarınız memnuniyetle karşılanır! Katkıda bulunmak için:

1. Repoyu fork'layın
2. Yeni bir branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inize push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request açın


## Teşekkürler

- **Hls.js** ekibine mükemmel akış çözümü için
- **Tailwind CSS** için modern CSS framework
- **Font Awesome** için zengin ikon seti

---

**Tenma Video Player** - Modern web için güçlü ve esnek video oynatma çözümü. Her türlü geri bildiriminizi bekliyoruz!
