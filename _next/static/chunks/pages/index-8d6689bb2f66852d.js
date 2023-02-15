(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        9886: function (e, i, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return t(9791)
            }])
        },
        9791: function (e, i, t) {
            "use strict";
            t.r(i), t.d(i, {
                default: function () {
                    return R
                }
            });
            var s = t(5893),
                n = t(2962),
                r = t(1664),
                a = t.n(r),
                o = t(6138),
                l = t.n(o),
                c = t(7294),
                d = t(7335),
                h = t(204),
                x = t(8911),
                u = t(1533),
                p = t(9222),
                m = t(1479),
                g = t(1963),
                j = t(4504),
                f = t(5819),
                v = t(3793),
                y = t(1004),
                b = t(6005),
                F = t(9394),
                w = t(333),
                k = t(9558),
                C = t(5591),
                S = t(939),
                N = t(7018),
                B = t(7626),
                _ = t(2512),
                I = t(2939);
            let T = () => {
                let {
                    isOpen: e,
                    onOpen: i,
                    onClose: t
                } = (0, d.q)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(I.Z, {
                        isOpen: e,
                        onClose: t,
                        children: (0, s.jsxs)("div", {
                            className: "how-work",
                            children: [(0, s.jsx)("h1", {
                                children: "How does this work?"
                            }), (0, s.jsxs)("ol", {
                                children: [(0, s.jsx)("li", {
                                    children: "You upload your file and click submit"
                                }), (0, s.jsxs)("li", {
                                    children: ["Pay the lightning invoice. It includes an inscription fee of", " ", (0, s.jsx)("strong", {
                                        children: "0.001 BTC + %10"
                                    })]
                                }), (0, s.jsx)("li", {
                                    children: "The inscription will then be minted"
                                }), (0, s.jsx)("li", {
                                    children: "If you provided a BTC address, your inscription will be automatically sent to you"
                                })]
                            }), (0, s.jsxs)("p", {
                                style: {
                                    marginTop: "30px"
                                },
                                children: [(0, s.jsx)("strong", {
                                    children: "Note:"
                                }), " If you do not provide a BTC address, we will hold the inscription for you until you get one set up. When you have a wallet set up, simply open a ticket and give us your order ID, we will then send you the inscription."]
                            }), (0, s.jsx)(a(), {
                                href: "faq",
                                className: "button primary faq",
                                children: "View FAQ"
                            })]
                        })
                    }), (0, s.jsx)(p.z, {
                        onClick: i,
                        style: {
                            background: "background: rgba(255, 255, 255, 0.7) !important",
                            transform: "none!important"
                        },
                        children: "How does this work?"
                    })]
                })
            };
            var z = t(8303),
                O = t(4590),
                Z = t(1653),
                A = t(3750),
                D = t(1983),
                H = t(8433);
            let q = () => {
                let {
                    isOpen: e,
                    onOpen: i,
                    onClose: t
                } = (0, d.q)(), [n, r] = (0, c.useState)([]), a = c.useRef(null), [o, l] = (0, c.useState)(!0), [I, q] = (0, c.useState)(""), [E, W] = (0, c.useState)(!1), [P, R] = (0, c.useState)(!1), [U, J] = (0, c.useState)(""), [K, X] = (0, c.useState)({
                    commit: "",
                    inscription: "",
                    reveal: "",
                    fees: 0
                }), [M, L] = (0, c.useState)("4"), [Q, Y] = (0, c.useState)({
                    fastestFee: 17,
                    halfHourFee: 11,
                    hourFee: 7,
                    economyFee: 2,
                    minimumFee: 1
                }), [V, G] = (0, c.useState)({
                    chainFee: 0,
                    baseFee: 0,
                    serviceFee: 0,
                    totalFee: 0,
                    totalFeeinUSD: 0
                }), [$, ee] = (0, c.useState)({
                    id: "",
                    amount: 0,
                    uri: "bitcoin:3CSbitcoinaddress?amount=0.99999&label=ordinalsbot+order&lightning=lnbcinvoice",
                    serviceFee: 0
                }), ei = async () => {
                    try {
                        if (n.length < 1) throw Error("no file selected");
                        R(!0), n.forEach(e => {
                            let s = new FileReader;
                            s.onabort = () => console.log("file reading was aborted"), s.onerror = () => console.log("file reading has failed"), s.onload = async () => {
                                var n, r, a, o, c, d, h, x;
                                let u = s.result;
                                console.log("file ", e);
                                let p = "";
                                window.location.href.includes("?") && window.location.href.includes("=") && (p = null === (n = null === (r = window.location.href) || void 0 === r ? void 0 : r.split("?")[1]) || void 0 === n ? void 0 : n.split("=")[1]);
                                try {
                                    let m = await H.Z.post("/api/order", {
                                        file: {
                                            size: e.size,
                                            type: e.type,
                                            name: e.name
                                        },
                                        receiveAddress: I,
                                        fee: M,
                                        dataURL: u,
                                        referral: p
                                    });
                                    if (!(null === (a = m.data) || void 0 === a ? void 0 : null === (o = a.charge) || void 0 === o ? void 0 : null === (c = o.lightning_invoice) || void 0 === c ? void 0 : c.payreq)) {
                                        let g = "Could not create order";
                                        throw (null === (h = m.data) || void 0 === h ? void 0 : h.status) && (g = null === (x = m.data) || void 0 === x ? void 0 : x.status), Error(g)
                                    }
                                    let j = m.data.charge;
                                    if (j.serviceFee = m.data.serviceFee, j.chainFee = m.data.chainFee, ee(j), console.log("charge created ", j), localStorage.getItem("ordinalsbot-orders")) {
                                        let f = localStorage.getItem("ordinalsbot-orders") || "{}",
                                            v = JSON.parse(f);
                                        v[j.id] = {
                                            id: j.id,
                                            created_at: j.created_at
                                        }, localStorage.setItem("ordinalsbot-orders", JSON.stringify(v))
                                    } else localStorage.setItem("ordinalsbot-orders", JSON.stringify({
                                        [j.id]: {
                                            id: j.id,
                                            created_at: j.created_at
                                        }
                                    }));
                                    J(null == j ? void 0 : null === (d = j.lightning_invoice) || void 0 === d ? void 0 : d.payreq), i();
                                    let y = setInterval(async () => {
                                        let e = await H.Z.get("/api/order?id=".concat(j.id));
                                        e.data.paid && e.data.tx && (l(!1), clearInterval(y), X(e.data.tx), t()), e.data.paid && "error" === e.data.status && (console.log("order data ", e.data), alert("something went wrong, reach out for refund in Satoshibles discord if you already paid: https://forms.gle/KmYLTHmTux8UoMCP8"))
                                    }, 5e3)
                                } catch (b) {
                                    console.log("".concat(b.status, " | ").concat(b.message)), R(!1), alert("error ".concat(b.message))
                                }
                            }, s.readAsDataURL(e)
                        })
                    } catch (e) {
                        console.log("generateinvoice error ", e.message), R(!1), alert("error ".concat(e.message))
                    }
                }, et = e => {
                    L(e.target.value)
                };
                return (0, c.useEffect)(() => {
                    let e = async () => {
                        var e;
                        let i = await H.Z.get("https://mempool.space/api/v1/fees/recommended");
                        (null === (e = i.data) || void 0 === e ? void 0 : e.halfHourFee) && Y(i.data)
                    };
                    e()
                }, []), (0, c.useEffect)(() => {
                    let e = async () => {
                        try {
                            if (!M || n.length < 1) return;
                            let e = await H.Z.get("/api/price?fee=".concat(M, "&size=").concat(n[0].size)),
                                i = e.data;
                            if (i.serviceFee && i.chainFee) {
                                var t, s;
                                G(i);
                                let r = await H.Z.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"),
                                    a = null == r ? void 0 : null === (t = r.data) || void 0 === t ? void 0 : null === (s = t.bitcoin) || void 0 === s ? void 0 : s.usd,
                                    o = ((i.serviceFee + i.chainFee) / 1e8 * a).toFixed(2);
                                G({
                                    ...i,
                                    totalFeeinUSD: o
                                })
                            }
                        } catch (l) {
                            console.log("fetchServiceFee error ", l.message)
                        }
                    };
                    e()
                }, [M, n]), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        className: "form-content",
                        children: [o && (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("p", {
                                className: "form-title",
                                children: "Upload a file to begin, we will then inscribe and send it to you:"
                            }), (0, s.jsx)(h.k, {
                                margin: "25px 0 30px",
                                justifyContent: "center",
                                gap: 2,
                                border: "1px turquoise dashed",
                                style: {
                                    cursor: "pointer"
                                },
                                children: (0, s.jsx)(_.ZP, {
                                    accept: {
                                        "image/*": [],
                                        "text/*": [],
                                        "video/*": []
                                    },
                                    maxFiles: 1,
                                    onDrop: e => {
                                        if (e[0].size > 50000e4) {
                                            alert("Max file size: 350kb");
                                            return
                                        }
                                        W(!0), r(e)
                                    },
                                    children: e => {
                                        let {
                                            getRootProps: i,
                                            getInputProps: t
                                        } = e;
                                        return (0, s.jsx)("section", {
                                            children: (0, s.jsxs)("div", {
                                                ...i(),
                                                style: {
                                                    padding: "40px"
                                                },
                                                children: [(0, s.jsx)("input", {
                                                    ...t()
                                                }), n.length > 0 ? (0, s.jsxs)(x.x, {
                                                    fontSize: "md",
                                                    children: [n[0].name, (0, s.jsx)("br", {}), (n[0].size / 1024).toFixed(3), " KB"]
                                                }) : (0, s.jsx)("p", {
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: "Drag and drop image or text files here, or click to select files"
                                                })]
                                            })
                                        })
                                    }
                                })
                            }), (0, s.jsx)("p", {
                                className: "form-title address",
                                children: "Tell us the BTC address you want the inscription sent or add it later:"
                            }), (0, s.jsx)(u.I, {
                                id: "btc-address",
                                marginBottom: 2,
                                justifyContent: "center",
                                gap: 2,
                                padding: 4,
                                background: "#fff",
                                _placeholder: {
                                    color: "#949494"
                                },
                                color: "#000",
                                focusBorderColor: "turquoise",
                                value: I,
                                placeholder: "Receive BTC Address (optional)",
                                onChange: e => q(e.target.value)
                            }), E && (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("p", {
                                    className: "form-title address",
                                    children: "Select the network fee you want to pay:"
                                }), (0, s.jsxs)("div", {
                                    className: "fee-select",
                                    children: [(0, s.jsx)("input", {
                                        type: "radio",
                                        name: "fee",
                                        id: "economyFee",
                                        value: 50,
                                        // onChange: et
                                    }), (0, s.jsxs)("label", {
                                        htmlFor: "economyFee",
                                        children: [(0, s.jsx)("h2", {
                                            children: "Economy"
                                        }), (0, s.jsxs)("span", {
                                            children: [50, " sats/vB"]
                                        })]
                                    }), (0, s.jsx)("input", {
                                        type: "radio",
                                        name: "fee",
                                        id: "halfHourFee",
                                        value: 100,
                                        // onChange: et
                                    }), (0, s.jsxs)("label", {
                                        htmlFor: "halfHourFee",
                                        children: [(0, s.jsx)("h2", {
                                            children: "Normal"
                                        }), (0, s.jsxs)("span", {
                                            children: [100, " sats/vB"]
                                        })]
                                    }), (0, s.jsx)("input", {
                                        type: "radio",
                                        name: "fee",
                                        id: "fastestFee",
                                        value: 200,
                                        // onChange: et
                                    }), (0, s.jsxs)("label", {
                                        htmlFor: "fastestFee",
                                        children: [(0, s.jsx)("h2", {
                                            children: "Faster"
                                        }), (0, s.jsxs)("span", {
                                            children: [200, " sats/vB"]
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    style: {
                                        marginBottom: "30px",
                                        display: "inline-block",
                                        textAlign: "center",
                                        marginTop: "20px",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        width: "100%"
                                    },
                                    children: [(0, s.jsxs)("p", {
                                        children: ["Network Fees: ".concat(V.chainFee ? V.chainFee : "-"), " ", " 123832 sats"]
                                    }), (0, s.jsxs)("p", {
                                        children: ["Total Amount (incl service fees): ".concat(V.chainFee ? V.chainFee + V.serviceFee : "-"), " ", "2230437991 sats", (0, s.jsxs)("span", {
                                            children: [" ", "(~", " 100 USD)"]
                                        })]
                                    })]
                                })]
                            }), (0, s.jsxs)(h.k, {
                                className: "form-actions",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 5,
                                marginBottom: 5,
                                gap: 5,
                                direction: "row",
                                children: [(0, s.jsx)(T, {}), (0, s.jsx)("a", {
                                    className: "primary",
                                    href: "pay.html",
                                    // onClick: ei,
                                    
                                    isDisabled: n.length < 1 || P,
                                    class: "chakra-button primary css-106v2fh",
                                    children: "Submit & Pay Invoice"
                                    
                                })]
                            })]
                        }), (null == $ ? void 0 : $.id) && (0, s.jsx)("div", {
                            className: "info-box",
                            children: (0, s.jsxs)(h.k, {
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2,
                                flexDirection: "column",
                                children: [(0, s.jsx)("h1", {
                                    children: "Here‘s your order Id:"
                                }), (0, s.jsx)("h2", {
                                    className: "order-id",
                                    children: null == $ ? void 0 : $.id
                                }), (0, s.jsxs)("p", {
                                    className: "warning",
                                    children: [(0, s.jsx)("strong", {
                                        children: "Keep it safe"
                                    }), ", dont share with anyone else!"]
                                }), (0, s.jsxs)("p", {
                                    children: ["You can use your order id for support in the", " ", (0, s.jsx)("a", {
                                        href: "https://forms.gle/KmYLTHmTux8UoMCP8",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Satoshibles discord"
                                    }), "."]
                                })]
                            })
                        }), K.commit && (0, s.jsx)("div", {
                            className: "info-box",
                            children: (0, s.jsxs)(h.k, {
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2,
                                direction: "column",
                                children: [(0, s.jsx)("h1", {
                                    style: {
                                        marginBottom: "15px"
                                    },
                                    children: "Here are your transactions:"
                                }), (0, s.jsxs)("div", {
                                    className: "tx-item",
                                    children: [(0, s.jsx)("span", {
                                        children: "Commit Tx:"
                                    }), (0, s.jsx)("a", {
                                        href: "https://mempool.space/tx/".concat(K.commit),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, z.F)(K.commit)
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "tx-item",
                                    children: [(0, s.jsx)("span", {
                                        children: "Reveal Tx:"
                                    }), (0, s.jsx)("a", {
                                        href: "https://mempool.space/tx/".concat(K.reveal),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, z.F)(K.reveal)
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "tx-item",
                                    children: [(0, s.jsx)("span", {
                                        children: "Inscription:"
                                    }), (0, s.jsx)("a", {
                                        href: "https://ordinals.com/inscription/".concat(K.inscription),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, z.F)(K.inscription)
                                    })]
                                })]
                            })
                        })]
                    }), (0, s.jsxs)(m.a, {
                        motionPreset: "slideInBottom",
                        leastDestructiveRef: a,
                        onClose: t,
                        isOpen: e,
                        isCentered: !0,
                        closeOnOverlayClick: !1,
                        children: [(0, s.jsx)(g.Z, {}), (0, s.jsxs)(m._, {
                            style: {
                                background: "#303640"
                            },
                            children: [(0, s.jsxs)("div", {
                                style: {
                                    textAlign: "center",
                                    margin: "20px"
                                },
                                children: [(0, s.jsx)("h1", {
                                    children: "Here‘s your order Id:"
                                }), (0, s.jsx)("h2", {
                                    className: "order-id",
                                    style: {
                                        marginBottom: "20px"
                                    },
                                    children: null == $ ? void 0 : $.id
                                }), (0, s.jsx)(O.Z, {
                                    orderId: null == $ ? void 0 : $.id
                                })]
                            }), (0, s.jsx)("hr", {}), (0, s.jsx)(j.x, {
                                textAlign: "center",
                                children: "Tap or Scan to Pay"
                            }), (0, s.jsx)(f.o, {}), (0, s.jsx)(v.f, {
                                children: (0, s.jsxs)(y.m, {
                                    isFitted: !0,
                                    children: [(0, s.jsxs)(b.t, {
                                        children: [(0, s.jsx)(F.O, {
                                            children: "Lightning BTC (Instant)"
                                        }), (0, s.jsx)(F.O, {
                                            children: "Onchain BTC"
                                        })]
                                    }), (0, s.jsxs)(w.n, {
                                        children: [(0, s.jsxs)(k.x, {
                                            children: [(0, s.jsx)("a", {
                                                href: "lightning:".concat(U),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: (0, s.jsx)("div", {
                                                    style: {
                                                        height: "auto",
                                                        margin: "30px auto 45px",
                                                        width: "200px",
                                                        background: "white",
                                                        padding: "16px",
                                                        marginBottom: "16px"
                                                    },
                                                    children: (0, s.jsx)(Z.Z, {
                                                        size: 256,
                                                        style: {
                                                            height: "auto",
                                                            maxWidth: "100%",
                                                            width: "100%"
                                                        },
                                                        value: U,
                                                        viewBox: "0 0 256 256"
                                                    })
                                                })
                                            }), (0, s.jsxs)(C.B, {
                                                size: "sm",
                                                marginBottom: 4,
                                                children: [(0, s.jsx)(S.Ui, {
                                                    children: (0, s.jsx)(A.XLv, {
                                                        style: {
                                                            background: "inherit"
                                                        }
                                                    })
                                                }), (0, s.jsx)(u.I, {
                                                    value: U,
                                                    readOnly: !0
                                                }), (0, s.jsx)(S.xW, {
                                                    children: (0, s.jsx)(D.T, {
                                                        style: {
                                                            background: "inherit"
                                                        },
                                                        onClick: () => navigator.clipboard.writeText(U)
                                                    })
                                                })]
                                            })]
                                        }), (0, s.jsxs)(k.x, {
                                            children: [(0, s.jsx)("a", {
                                                href: "".concat($.uri.split("&lightning")[0]),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: (0, s.jsx)("div", {
                                                    style: {
                                                        height: "auto",
                                                        margin: "30px auto 45px",
                                                        width: "200px",
                                                        background: "white",
                                                        padding: "16px",
                                                        marginBottom: "16px"
                                                    },
                                                    children: (0, s.jsx)(Z.Z, {
                                                        size: 256,
                                                        style: {
                                                            height: "auto",
                                                            maxWidth: "100%",
                                                            width: "100%"
                                                        },
                                                        value: $.uri.split("&lightning")[0],
                                                        viewBox: "0 0 256 256"
                                                    })
                                                })
                                            }), (0, s.jsxs)(C.B, {
                                                size: "sm",
                                                marginBottom: 4,
                                                children: [(0, s.jsx)(S.Ui, {
                                                    children: (0, s.jsx)(A.vvX, {
                                                        style: {
                                                            background: "inherit"
                                                        }
                                                    })
                                                }), (0, s.jsx)(u.I, {
                                                    value: $.uri.split("bitcoin:")[1].split("&lightning")[0],
                                                    readOnly: !0
                                                }), (0, s.jsx)(S.xW, {
                                                    children: (0, s.jsx)(D.T, {
                                                        style: {
                                                            background: "inherit"
                                                        },
                                                        onClick: () => navigator.clipboard.writeText($.uri.split("bitcoin:")[1].split("&lightning")[0].split("&label")[0])
                                                    })
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, s.jsxs)(N.m, {
                                justifyContent: "center",
                                flexDirection: "column",
                                children: [(0, s.jsxs)(x.x, {
                                    children: ["Service Fee: ", $.serviceFee, " sats", (0, s.jsx)("br", {}), "Total Amount: ", $.amount, " sats"]
                                }), (0, s.jsx)(B.D, {
                                    color: "turquoise",
                                    marginTop: 4,
                                    isIndeterminate: !0
                                })]
                            })]
                        })]
                    })]
                })
            };
            l().setCredentials("555c92a8-aaa2-4fef-91de-b0f113caae94");
            let E = () => (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("a", {
                    href: "https://docs.google.com/forms/d/e/1FAIpQLSfDT8is7ADWGoSoaaBqxcETT4KQcD-PlVF8ti-KXNUJtqzh4Q/viewform",
                    className: "bulk-link",
                    target: "_blank",
                    rel: "noreferrer",
                    children: ["Want to use our Bulk Inscription Service? Click here", (0, s.jsx)("span", {
                        children: "new"
                    })]
                }), (0, s.jsx)("p", {
                    className: "split-text",
                    children: "or use the single inscription service..."
                }), (0, s.jsx)(q, {}), (0, s.jsx)(a(), {
                    href: "/faq",
                    className: "faq-link",
                    children: "Need help? Have a look at the FAQ"
                })]
            });
            var W = t(1029);
            let P = () => (0, s.jsxs)("div", {
                children: [(0, s.jsx)(n.PB, {
                    title: "OrdinalsBot"
                }), (0, s.jsx)(E, {}), (0, s.jsx)(W.Z, {})]
            });
            var R = P
        }
    },
    function (e) {
        e.O(0, [13, 714, 478, 774, 888, 179], function () {
            return e(e.s = 9886)
        }), _N_E = e.O()
    }
]);