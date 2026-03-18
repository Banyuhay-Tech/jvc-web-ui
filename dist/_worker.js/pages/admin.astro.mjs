globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DIoIlRSf.mjs';
import { $ as $$HomeLayout } from '../chunks/HomeLayout_PXZGCfgy.mjs';
import { j as jsxRuntimeExports } from '../chunks/jsx-runtime_DkXZAXSF.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_jEiFjMJ7.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_jEiFjMJ7.mjs';

function formatDateTime(value) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString(void 0, { year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}
function AdminAppointments() {
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [password, setPassword] = reactExports.useState("");
  const [passwordError, setPasswordError] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [loadError, setLoadError] = reactExports.useState("");
  const [appointments, setAppointments] = reactExports.useState([]);
  const [query, setQuery] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [updatingId, setUpdatingId] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    return appointments.filter((a) => {
      const matchesStatus = statusFilter === "all" ? true : a.status === statusFilter;
      if (!matchesStatus) return false;
      if (!q) return true;
      const haystack = `${a.customer_name} ${a.email ?? ""} ${a.phone} ${a.pet_details} ${a.service_needed} ${a.branch}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [appointments, query, statusFilter]);
  async function loadData(adminPassword) {
    setIsLoading(true);
    setLoadError("");
    try {
      const res = await fetch("/api/admin/appointments", {
        headers: {
          "x-admin-password": adminPassword
        }
      });
      if (res.status === 401) {
        setPasswordError("Incorrect password");
        setIsAuthenticated(false);
        return;
      }
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed: ${res.status}`);
      }
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setAppointments(json.data ?? []);
      setIsAuthenticated(true);
    } catch (e) {
      setLoadError(e instanceof Error ? e.message : "Failed to load appointments");
    } finally {
      setIsLoading(false);
    }
  }
  const onLogin = async (e) => {
    e.preventDefault();
    setPasswordError("");
    await loadData(password);
  };
  async function updateStatus(id, status) {
    setUpdatingId(id);
    setLoadError("");
    try {
      const res = await fetch(`/api/admin/appointments/${encodeURIComponent(id)}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "x-admin-password": password
        },
        body: JSON.stringify({ status })
      });
      if (res.status === 401) {
        setPasswordError("Incorrect password");
        setIsAuthenticated(false);
        return;
      }
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Update failed: ${res.status}`);
      }
      setAppointments((prev) => prev.map((a) => a.id === id ? { ...a, status } : a));
    } catch (e) {
      setLoadError(e instanceof Error ? e.message : "Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  }
  reactExports.useEffect(() => {
    if (!isAuthenticated) return;
  }, [isAuthenticated]);
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-slate-100 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-8 w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-[#0a441e] rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-xl", children: "JVC" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-[#0a441e]", children: "Admin Access" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-2", children: "Enter password to continue" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: onLogin, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            placeholder: "Enter password",
            className: "w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bb9313] focus:border-transparent mb-4"
          }
        ),
        passwordError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600 text-sm mb-4", children: passwordError }),
        loadError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600 text-sm mb-4", children: loadError }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: isLoading,
            className: "w-full bg-[#bb9313] text-white py-3 rounded-xl font-bold hover:bg-[#a88210] transition-colors disabled:opacity-60",
            children: isLoading ? "Checking…" : "Login"
          }
        )
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-[#0a441e] text-white py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "JVC Admin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: "Appointments" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => loadData(password),
            disabled: isLoading,
            className: "text-sm bg-white/10 hover:bg-white/15 px-3 py-2 rounded-lg disabled:opacity-60",
            children: isLoading ? "Refreshing…" : "Refresh"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setIsAuthenticated(false);
              setAppointments([]);
              setQuery("");
              setStatusFilter("all");
            },
            className: "text-sm text-white/80 hover:text-white",
            children: "Logout"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-7xl mx-auto p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-slate-100 p-4 md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center gap-3 md:gap-4 justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-3 md:gap-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: query,
              onChange: (e) => setQuery(e.target.value),
              placeholder: "Search name, email, contact number, pet, service…",
              className: "w-full md:max-w-md px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bb9313] focus:border-transparent"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: statusFilter,
              onChange: (e) => setStatusFilter(e.target.value),
              className: "px-4 py-2.5 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#bb9313] focus:border-transparent",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All statuses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "new", children: "New" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "confirmed", children: "Confirmed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Completed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "Cancelled" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-slate-500 shrink-0", children: [
          "Showing ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-slate-700", children: filtered.length }),
          " of",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-slate-700", children: appointments.length })
        ] })
      ] }),
      loadError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600 text-sm mb-3", children: loadError }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-slate-50 text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-semibold px-4 py-3", children: "Requested" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-semibold px-4 py-3", children: "Name & Pet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-semibold px-4 py-3", children: "Contact number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-semibold px-4 py-3", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-semibold px-4 py-3", children: "Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-semibold px-4 py-3", children: "Branch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-semibold px-4 py-3", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-slate-100", children: [
          filtered.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-50/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 whitespace-nowrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-800", children: formatDateTime(a.requested_datetime) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-slate-500", children: [
                "Created ",
                formatDateTime(a.created_at)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-800", children: a.customer_name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-600", children: a.pet_details }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500 text-xs break-all", children: a.source_page })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-slate-800", children: a.phone }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-slate-800", children: a.email ? a.email : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: a.service_needed }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap", children: a.branch }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: a.status,
                onChange: (e) => updateStatus(a.id, e.target.value),
                disabled: updatingId === a.id,
                className: "px-3 py-2 border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#bb9313] focus:border-transparent disabled:opacity-60",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "new", children: "new" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "confirmed", children: "confirmed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "completed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "cancelled" })
                ]
              }
            ) })
          ] }, a.id)),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-10 text-center text-slate-500", colSpan: 7, children: "No appointments match your filters." }) })
        ] })
      ] }) })
    ] }) })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HomeLayout", $$HomeLayout, { "title": "Admin - Jamir Veterinary Clinic", "description": "Admin dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AdminAppointments", AdminAppointments, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/jvc-web-ui/src/components/admin/AdminAppointments", "client:component-export": "default" })} ` })}`;
}, "D:/jvc-web-ui/src/pages/admin/index.astro", void 0);

const $$file = "D:/jvc-web-ui/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
