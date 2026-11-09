$(document).ready(function () {
  // =========================================================================
  // 1. DATOS DEL CATÁLOGO (BURGER CLUB)
  // =========================================================================
  const foods = [
    {
      id: 1,
      name: "Smoky Bourbon BBQ",
      category: "Hamburguesas",
      price: 46,
      tag: "★ Top Ventas",
      desc: "Doble carne smash, queso cheddar madurado, tocino ahumado crocante y reducción BBQ bourbon.",
      ingredients: "Pan brioche artesanal, 2x medallones de 110g, doble cheddar, panceta ahumada, aros de cebolla crispy.",
      img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=85"
    },
    {
      id: 2,
      name: "Doble Smash Cheddar",
      category: "Hamburguesas",
      price: 42,
      tag: "🔥 Clásica",
      desc: "Costra caramelizada en plancha de hierro, cuádruple lámina de cheddar, pepinillos y salsa Club.",
      ingredients: "Pan de papa, 2x carnes smash, queso americano cheddar, cebolla brunoise, pepinillos encurtidos.",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85"
    },
    {
      id: 3,
      name: "Truffle Mushroom Melt",
      category: "Hamburguesas",
      price: 48,
      tag: "✦ Gourmet",
      desc: "Carne angus, champiñones salteados en mantequilla, queso suizo fundido y alioli de trufa negra.",
      ingredients: "Pan brioche negro/dorado, carne 180g, queso emmental, portobellos salteados, mayonesa trufada.",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=85"
    },
    {
      id: 4,
      name: "Nashville Hot Crispy",
      category: "Hamburguesas",
      price: 39,
      tag: "🌶️ Picante",
      desc: "Pechuga de pollo ultra crujiente bañada en miel picante, coleslaw fresco y pepinillos.",
      ingredients: "Pollo marinado 24h en buttermilk, rebozado especiado, ensalada de col cremosa y miel de cayena.",
      img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=85"
    },
    {
      id: 5,
      name: "Combo Urban Dúo",
      category: "Combos",
      price: 88,
      tag: "👥 Para 2",
      desc: "2 Doble Smash Cheddar + 2 porciones de papas rústicas + 2 bebidas artesanales a elección.",
      ingredients: "Incluye 2 hamburguesas dobles, papas con piel al romero, 2 dips de salsa de la casa y 2 bebidas de 500ml.",
      img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=700&q=85"
    },
    {
      id: 6,
      name: "Combo Individual Club",
      category: "Combos",
      price: 55,
      tag: "⚡ Favorito",
      desc: "1 Smoky Bourbon BBQ + papas fritas crocantes con cheddar + limonada de menta y jengibre.",
      ingredients: "1 Burger a elección de línea clásica, 180g de papas fritas y 1 bebida refrescante.",
      img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=85"
    },
    {
      id: 7,
      name: "Loaded Bacon Fries",
      category: "Acompañamientos",
      price: 26,
      tag: "🧀 Extra Queso",
      desc: "Papas bastón doblemente fritas cubiertas con salsa cheddar caliente, tocino y cebollín.",
      ingredients: "300g de papa seleccionada, salsa cheddar fundida, lluvia de panceta crocante y cebollín fresco.",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85"
    },
    {
      id: 8,
      name: "Aros de Cebolla Beer-Battered",
      category: "Acompañamientos",
      price: 22,
      tag: "🧅 Crujientes",
      desc: "Aros de cebolla morada y blanca rebozados al estilo urbano con dip de salsa BBQ ahumada.",
      ingredients: "10 unidades de aros gigantes extra crocantes acompañados de salsa barbacoa de la casa.",
      img: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=700&q=85"
    },
    {
      id: 9,
      name: "Oreo Dark Milkshake",
      category: "Bebidas",
      price: 24,
      tag: "🥤 Shake",
      desc: "Batido cremoso de helado artesanal de vainilla, galletas Oreo trituradas y crema batida.",
      ingredients: "Leche entera, helado premium, cacao alcalino, trozos de galleta y salsa de chocolate.",
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=85"
    },
    {
      id: 10,
      name: "Limonada Frutos Rojos & Menta",
      category: "Bebidas",
      price: 16,
      tag: "🍋 Refrescante",
      desc: "Jugo de limón recién exprimido con infusión de frutos del bosque, hielo picado y hierbabuena.",
      ingredients: "Limón sutil, reducción artesanal de frambuesa y mora, hojas de menta fresca (500ml).",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=85"
    }
  ];

  // Variables de estado
  let currentCategory = "Todos";
  let currentSort = "featured";
  let cart = JSON.parse(localStorage.getItem("bc_cart") || "[]");
  let logs = JSON.parse(localStorage.getItem("bc_logs") || "[]");

  const money = (n) => "Bs. " + Number(n).toFixed(2);

  // =========================================================================
  // 2. BITÁCORA Y NOTIFICACIONES (TOAST)
  // =========================================================================
  function logAction(action) {
    logs.unshift({
      action: action,
      time: new Date().toLocaleTimeString("es-BO", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    });
    logs = logs.slice(0, 50);
    localStorage.setItem("bc_logs", JSON.stringify(logs));
    renderLog();
  }

  function renderLog() {
    const $log = $("#activityLog").empty();
    if (!logs.length) {
      $log.append('<div class="log-item">Sin actividad registrada.</div>');
      return;
    }
    logs.slice(0, 15).forEach((item) => {
      $log.append(
        `<div class="log-item">${$("<span>").text(item.time + " · " + item.action).html()}</div>`
      );
    });
  }

  function toast(msg) {
    $("#toast").text(msg).stop(true, true).fadeIn(180).delay(2300).fadeOut(300);
  }

  // =========================================================================
  // 3. CATÁLOGO INTERACTIVO, FILTROS Y EFECTOS (.show, .hide, .slideToggle)
  // =========================================================================
  function renderCatalog() {
    const searchTerm = $("#searchFood").val().toLowerCase().trim();

    let filtered = foods.filter((item) => {
      const matchCategory = currentCategory === "Todos" || item.category === currentCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm) ||
        item.desc.toLowerCase().includes(searchTerm) ||
        item.ingredients.toLowerCase().includes(searchTerm);
      return matchCategory && matchSearch;
    });

    // Ordenamiento dinámico
    if (currentSort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    $("#visibleCount").text(filtered.length);
    $("#activeCategoryLabel").text(currentCategory);

    const $grid = $("#foodGrid").empty();

    // Uso explícito de .show() y .hide() según resultados
    if (filtered.length === 0) {
      $("#emptyState").show(200);
    } else {
      $("#emptyState").hide(150);
    }

    const fallbackImg = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="450" viewBox="0 0 700 450">
        <rect width="700" height="450" fill="#15151c"/>
        <circle cx="350" cy="200" r="70" fill="#22222e" stroke="#ffb703" stroke-width="3"/>
        <text x="350" y="218" font-size="52" text-anchor="middle">🍔</text>
        <text x="350" y="320" fill="#ffb703" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">BURGER CLUB</text>
      </svg>`
    );

    filtered.forEach((f) => {
      const cardHTML = `
        <article class="food-card" data-id="${f.id}">
          <div class="food-media">
            <img loading="lazy" src="${f.img}" alt="${f.name}" onerror="this.onerror=null;this.src='${fallbackImg}';">
            <span class="food-tag">${f.tag}</span>
          </div>
          <div class="food-info">
            <span class="food-category">${f.category}</span>
            <h3>${f.name}</h3>
            <p>${f.desc}</p>
            <button class="details-toggle" type="button">＋ Ver ingredientes</button>
            <div class="food-details">
              <strong>Ingredientes & Ficha:</strong>
              <span>${f.ingredients}</span>
            </div>
            <div class="food-bottom">
              <span class="price">${money(f.price)}</span>
              <button class="add-btn" data-id="${f.id}" type="button">＋ Agregar</button>
            </div>
          </div>
        </article>
      `;
      $grid.append(cardHTML);
    });
  }

  // Filtro por botones de categoría
  $("#foodFilters").on("click", ".filter", function () {
    currentCategory = $(this).data("category");
    $(".filter").removeClass("active");
    $(this).addClass("active");

    // Efecto visual al actualizar el catálogo
    $("#foodGrid").hide().fadeIn(240);
    renderCatalog();
    logAction("Filtró categoría: " + currentCategory);
  });

  // Ordenamiento dinámico
  $("#sortFood").on("change", function () {
    currentSort = $(this).val();
    $("#foodGrid").hide().fadeIn(220);
    renderCatalog();
    logAction("Ordenó catálogo: " + currentSort);
  });

  // Buscador en tiempo real con debounce
  let searchTimer;
  $("#searchFood").on("input", function () {
    clearTimeout(searchTimer);
    const val = $(this).val().trim();
    searchTimer = setTimeout(() => {
      renderCatalog();
      if (val) logAction("Buscó en catálogo: " + val);
    }, 200);
  });

  // Restablecer filtros
  $("#resetFiltersBtn").on("click", function () {
    currentCategory = "Todos";
    currentSort = "featured";
    $("#searchFood").val("");
    $("#sortFood").val("featured");
    $(".filter").removeClass("active");
    $('.filter[data-category="Todos"]').addClass("active");
    renderCatalog();
    $("#foodGrid").show(200);
    logAction("Restableció filtros del catálogo");
  });

  // Desplegar ingredientes individuales en cada tarjeta con .slideToggle()
  $("#foodGrid").on("click", ".details-toggle", function () {
    const $details = $(this).next(".food-details");
    const $btn = $(this);
    $details.slideToggle(200, function () {
      $btn.text($details.is(":visible") ? "− Ocultar ingredientes" : "＋ Ver ingredientes");
    });
    logAction("Alternó ingredientes con .slideToggle()");
  });

  // Botón global para desplegar/ocultar todos los ingredientes con .slideToggle()
  $("#toggleAllDetails").on("click", function () {
    $(".food-details").slideToggle(220, function () {
      const visible = $(this).is(":visible");
      $(this).prev(".details-toggle").text(visible ? "− Ocultar ingredientes" : "＋ Ver ingredientes");
    });
    logAction("Alternó todas las fichas (.slideToggle)");
  });

  // Botones explícitos de demostración .hide() y .show() en el catálogo
  $("#hideCatalogBtn").on("click", function () {
    $("#foodGrid").hide(250);
    $(this).hide();
    $("#showCatalogBtn").show();
    toast("Catálogo oculto con .hide()");
    logAction("Ocultó el catálogo con .hide()");
  });

  $("#showCatalogBtn").on("click", function () {
    $("#foodGrid").show(250);
    $(this).hide();
    $("#hideCatalogBtn").show();
    toast("Catálogo visible con .show()");
    logAction("Mostró el catálogo con .show()");
  });

  // =========================================================================
  // 4. CARRITO DE COMPRAS
  // =========================================================================
  function saveCart() {
    localStorage.setItem("bc_cart", JSON.stringify(cart));
    renderCart();
  }

  function getDeliveryCost() {
    return $("#delivery").val() === "Entrega a domicilio" && cart.length > 0 ? 10 : 0;
  }

  function renderCart() {
    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    let subtotal = 0;

    $("#cartCount").text(totalCount);
    $("#cartItemsLabel").text(totalCount + (totalCount === 1 ? " producto seleccionado" : " productos seleccionados"));

    const $container = $("#cartItems").empty();
    if (!cart.length) {
      $container.html('<p class="muted">Todavía no agregaste productos del catálogo.</p>');
    } else {
      cart.forEach((item) => {
        const product = foods.find((f) => f.id === item.id);
        if (!product) return;
        subtotal += product.price * item.qty;

        $container.append(`
          <div class="cart-row">
            <div>
              <strong>${product.name}</strong>
              <small>${money(product.price)} c/u</small>
            </div>
            <div class="qty-controls">
              <button type="button" data-action="minus" data-id="${product.id}">−</button>
              <b>${item.qty}</b>
              <button type="button" data-action="plus" data-id="${product.id}">＋</button>
              <button type="button" data-action="remove" data-id="${product.id}" aria-label="Eliminar">×</button>
            </div>
          </div>
        `);
      });
    }

    const deliveryFee = getDeliveryCost();
    if (deliveryFee > 0) {
      $("#deliveryFeeRow").show(150);
    } else {
      $("#deliveryFeeRow").hide(150);
    }

    $("#cartSubtotal").text(money(subtotal));
    $("#cartTotal").text(money(subtotal + deliveryFee));
  }

  $("#foodGrid").on("click", ".add-btn", function () {
    const id = Number($(this).data("id"));
    const existing = cart.find((x) => x.id === id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ id: id, qty: 1 });
    }
    saveCart();
    const product = foods.find((f) => f.id === id);
    toast("🍔 " + product.name + " agregado al pedido");
    logAction("Agregó al pedido: " + product.name);
  });

  $("#cartItems").on("click", "button", function () {
    const id = Number($(this).data("id"));
    const action = $(this).data("action");
    const item = cart.find((x) => x.id === id);
    if (!item) return;

    if (action === "plus") item.qty++;
    if (action === "minus") item.qty--;
    if (action === "remove" || item.qty <= 0) {
      cart = cart.filter((x) => x.id !== id);
    }
    saveCart();
    logAction("Actualizó cantidades del carrito");
  });

  $("#clearCartBtn").on("click", function () {
    if (!cart.length) return;
    cart = [];
    saveCart();
    toast("Carrito vaciado");
    logAction("Vació el carrito");
  });

  // =========================================================================
  // 5. MENÚS, BANNER PROMO Y ACORDEONES (.slideToggle y .fadeToggle)
  // =========================================================================
  // Menú móvil con .slideToggle()
  $("#menuToggle").on("click", function () {
    $("#mainNav").slideToggle(220);
    logAction("Alternó menú móvil (.slideToggle)");
  });

  $("#mainNav a").on("click", function () {
    if ($(window).width() <= 720) {
      $("#mainNav").slideUp(180);
    }
  });

  // Banner promocional con .fadeToggle()
  $("#togglePromoBtn").on("click", function () {
    $("#promoBanner").fadeToggle(260);
    logAction("Alternó banner promo (.fadeToggle)");
  });

  $("#closePromoBtn").on("click", function () {
    $("#promoBanner").fadeOut(220);
  });

  // Acordeones de sección Nosotros con .slideToggle()
  $(".accordion-title").on("click", function () {
    const $body = $(this).next(".accordion-body");
    const $icon = $(this).find(".acc-icon");

    // Cerrar otros acordeones abiertos
    $(".accordion-body").not($body).slideUp(200);
    $(".acc-icon").not($icon).text("＋");

    $body.slideToggle(220, function () {
      $icon.text($body.is(":visible") ? "−" : "＋");
    });
    logAction("Interactuó con acordeón (.slideToggle)");
  });

  // Horarios de la empresa con .fadeToggle()
  $("#toggleHoursBtn").on("click", function () {
    $("#hoursBox").fadeToggle(250);
    logAction("Alternó horarios de atención (.fadeToggle)");
  });

  // Ir al carrito con scroll animado
  $("#goCart").on("click", function () {
    $("html, body").animate({ scrollTop: $("#pedido").offset().top - 74 }, 450);
    logAction("Navegó al resumen de pedido");
  });

  // =========================================================================
  // 6. VALIDACIÓN EN TIEMPO REAL DEL FORMULARIO
  // =========================================================================
  function setFieldState($input, $error, isValid, errorMsg) {
    if (isValid) {
      $input.removeClass("is-invalid").addClass("is-valid");
      $error.text("");
    } else {
      $input.removeClass("is-valid").addClass("is-invalid");
      $error.text(errorMsg);
    }
    return isValid;
  }

  function validName() {
    const val = $("#customerName").val().trim();
    const ok = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:[ '-][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)+$/.test(val) && val.length >= 5;
    return setFieldState($("#customerName"), $("#nameError"), ok, "Ingresa nombre y apellido válidos (mín. 2 palabras).");
  }

  function validPhone() {
    const val = $("#customerPhone").val().replace(/\s/g, "");
    const ok = /^(?:\+591)?[67]\d{7}$/.test(val);
    return setFieldState($("#customerPhone"), $("#phoneError"), ok, "Ingresa un celular boliviano válido de 8 dígitos (inicia con 6 o 7).");
  }

  function validEmail() {
    const val = $("#customerEmail").val().trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val);
    return setFieldState($("#customerEmail"), $("#emailError"), ok, "Ingresa un correo electrónico válido.");
  }

  function validDelivery() {
    const val = $("#delivery").val();
    const ok = val !== "";
    return setFieldState($("#delivery"), $("#deliveryError"), ok, "Selecciona una modalidad de servicio.");
  }

  function validAddress() {
    if ($("#delivery").val() !== "Entrega a domicilio") {
      $("#address").removeClass("is-invalid is-valid");
      $("#addressError").text("");
      return true;
    }
    const val = $("#address").val().trim();
    const ok = val.length >= 8 && val.length <= 120;
    return setFieldState($("#address"), $("#addressError"), ok, "Escribe la dirección exacta (mínimo 8 caracteres).");
  }

  function validReservation() {
    if ($("#delivery").val() !== "Reserva de mesa en salón") {
      $("#guestsCount, #reservationTime").removeClass("is-invalid is-valid");
      $("#guestsError, #timeError").text("");
      return true;
    }
    const guests = Number($("#guestsCount").val());
    const okGuests = Number.isInteger(guests) && guests >= 1 && guests <= 15;
    setFieldState($("#guestsCount"), $("#guestsError"), okGuests, "Indica entre 1 y 15 personas.");

    const time = $("#reservationTime").val();
    const okTime = time >= "12:00" && time <= "23:00";
    setFieldState($("#reservationTime"), $("#timeError"), okTime, "Selecciona un horario entre 12:00 y 23:00.");

    return okGuests && okTime;
  }

  // Mostrar/ocultar campos dinámicos según modalidad con .show() y .hide()
  $("#delivery").on("change", function () {
    const mode = $(this).val();
    validDelivery();

    if (mode === "Entrega a domicilio") {
      $("#addressGroup").show(220);
      $("#reservationGroup").hide(180);
    } else if (mode === "Reserva de mesa en salón") {
      $("#reservationGroup").show(220);
      $("#addressGroup").hide(180);
    } else {
      $("#addressGroup").hide(180);
      $("#reservationGroup").hide(180);
    }

    renderCart();
    logAction("Cambió modalidad a: " + (mode || "Ninguna"));
  });

  // Eventos de validación en tiempo real
  $("#customerName").on("input blur", validName);
  $("#customerPhone").on("input blur", validPhone);
  $("#customerEmail").on("input blur", validEmail);
  $("#address").on("input blur", validAddress);
  $("#guestsCount, #reservationTime").on("input change blur", validReservation);

  $("#orderNotes").on("input", function () {
    $("#notesCount").text($(this).val().length);
  });

  // Envío del formulario
  $("#orderForm").on("submit", function (e) {
    e.preventDefault();

    const okName = validName();
    const okPhone = validPhone();
    const okEmail = validEmail();
    const okDel = validDelivery();
    const okAddr = validAddress();
    const okRes = validReservation();

    if (!cart.length) {
      toast("⚠️ Agrega al menos un producto del catálogo.");
      $("html, body").animate({ scrollTop: $("#menu").offset().top - 70 }, 400);
      return;
    }

    if (!(okName && okPhone && okEmail && okDel && okAddr && okRes)) {
      toast("⚠️ Revisa los campos marcados en rojo.");
      return;
    }

    const totalItems = cart.reduce((a, x) => a + x.qty, 0);
    const subtotal = cart.reduce((a, x) => a + foods.find((f) => f.id === x.id).price * x.qty, 0);
    const total = subtotal + getDeliveryCost();
    const mode = $("#delivery").val();

    $("#confirmText").text(
      `¡Hola ${$("#customerName").val().trim()}! Hemos registrado tu solicitud en Burger Club.`
    );

    let extraInfo = "";
    if (mode === "Entrega a domicilio") {
      extraInfo = `<div><span>Dirección:</span> <strong>${$("<span>").text($("#address").val().trim()).html()}</strong></div>`;
    } else if (mode === "Reserva de mesa en salón") {
      extraInfo = `<div><span>Reserva:</span> <strong>${$("#guestsCount").val()} personas a las ${$("#reservationTime").val()} hrs</strong></div>`;
    }

    $("#confirmDetails").html(`
      <div><span>Modalidad:</span> <strong>${mode}</strong></div>
      <div><span>Productos:</span> <strong>${totalItems} ítem(s)</strong></div>
      <div><span>Contacto:</span> <strong>${$("#customerPhone").val().trim()} · ${$("#customerEmail").val().trim()}</strong></div>
      ${extraInfo}
      <div><span>Total Estimado:</span> <strong>${money(total)}</strong></div>
    `);

    $("#confirmModal").fadeIn(220);
    logAction("Confirmó orden/reserva validada");
  });

  $("#closeModal, #finishOrder").on("click", function () {
    $("#confirmModal").fadeOut(200);
    toast("✅ Solicitud procesada correctamente.");
  });

  // =========================================================================
  // 7. SECCIÓN INTERACTIVA DE REDES SOCIALES
  // =========================================================================
  $("#socialCards").on("click", ".social-card", function () {
    $(".social-card").removeClass("active");
    $(this).addClass("active");

    const network = $(this).data("network");
    const handle = $(this).data("handle");
    const followers = $(this).data("followers");
    const desc = $(this).data("desc");
    const url = $(this).data("url");

    // Efecto .fadeToggle() para actualizar la tarjeta de vista previa
    $("#socialPreview").fadeToggle(140, function () {
      $("#previewNetwork").text(network.toUpperCase() + " OFICIAL");
      $("#previewHandle").text(handle);
      $("#previewFollowers").text(followers);
      $("#previewDesc").text(desc);
      $("#previewLink").attr("href", url);
      $(this).fadeToggle(180);
    });

    logAction("Exploró red social: " + network);
  });

  $("#copySocialBtn").on("click", function () {
    const handle = $("#previewHandle").text();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(handle);
    }
    toast("📋 Usuario copiado: " + handle);
    logAction("Copió usuario social: " + handle);
  });

  // =========================================================================
  // 8. PANEL DE BITÁCORA (.slideToggle)
  // =========================================================================
  $("#toggleLog").on("click", function () {
    $("#activityLog, #clearLog").slideToggle(200, function () {
      const visible = $("#activityLog").is(":visible");
      $("#toggleLog").text(visible ? "Ocultar −" : "Mostrar +");
    });
  });

  $("#clearLog").on("click", function () {
    logs = [];
    localStorage.removeItem("bc_logs");
    renderLog();
    toast("Bitácora limpiada");
  });

  // Inicialización general
  renderCatalog();
  renderCart();
  renderLog();
  logAction("Inició aplicación Burger Club");
});
