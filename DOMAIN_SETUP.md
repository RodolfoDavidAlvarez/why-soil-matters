# Domain Setup: whysoilmatters.com → Vercel

## Current Status

- **GitHub Repo**: https://github.com/RodolfoDavidAlvarez/why-soil-matters
- **Vercel Project**: https://why-soil-matters-b12po0fuu-rodolfo-alvarezs-projects-5c561a46.vercel.app
- **Custom Domain**: whysoilmatters.com (needs DNS configuration)

---

## Steps to Connect Domain

### 1. Add Domain in Vercel Dashboard

1. Go to: https://vercel.com/rodolfo-alvarezs-projects-5c561a46/why-soil-matters
2. Click "Settings" → "Domains"
3. Enter `whysoilmatters.com`
4. Click "Add"

Vercel will show you DNS records that need to be configured.

---

### 2. Configure DNS at GoDaddy

You'll need to add these DNS records at GoDaddy:

**For root domain (whysoilmatters.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

---

### 3. GoDaddy Setup Instructions

1. Log in to GoDaddy: https://dcc.godaddy.com/manage/dns
2. Find domain: `whysoilmatters.com`
3. Click "DNS" or "Manage DNS"
4. Add the records above
5. Save changes

**DNS propagation**: Can take 1-48 hours (usually 15-30 minutes)

---

### 4. Verify in Vercel

After DNS is configured:

1. Return to Vercel dashboard
2. Go to Settings → Domains
3. Wait for Vercel to verify the domain (green checkmark)
4. SSL certificate will be automatically issued (5-10 minutes)

---

## Alternative: CLI Method (if you have GoDaddy API access)

If you can connect GoDaddy via CLI, use these commands:

```bash
# Note: GoDaddy CLI isn't officially supported by Vercel
# You'll need to manually configure DNS as described above
```

---

## Current URLs

**Production (Vercel):**
- https://why-soil-matters-b12po0fuu-rodolfo-alvarezs-projects-5c561a46.vercel.app

**After DNS setup:**
- https://whysoilmatters.com (root domain)
- https://www.whysoilmatters.com (www subdomain)

Both will work and redirect to HTTPS automatically.

---

## Testing After Setup

Once DNS is configured and verified:

```bash
# Test DNS propagation
dig whysoilmatters.com
dig www.whysoilmatters.com

# Check SSL certificate
curl -I https://whysoilmatters.com

# Visit in browser
open https://whysoilmatters.com
```

---

## Landing Pages Ready

All 6 landing pages are live and ready for email campaigns:

1. `/fertilizer-loss` - Why 60% of Your Fertilizer Never Reaches Your Crops
2. `/usda-composting-bet` - The Composting Secret That Just Won a $700 Million Bet
3. `/dead-soil-water` - Dead Soil Can't Hold Water
4. `/gcu-garden-program` - The Free GCU Program Teaching Phoenix How to Grow Food
5. `/compost-math` - One Inch of Compost. 20,000 Gallons of Water Saved
6. `/heat-soil-biology` - 115°F and Your Soil is Dying

---

## Next Steps

1. **Configure DNS at GoDaddy** (manually or via CLI if available)
2. **Wait for propagation** (15-30 min typically)
3. **Verify domain in Vercel** (green checkmark)
4. **Test links** before sending email campaigns
5. **Add document upload capability** (optional - can share database with Organic Soil Wholesale)

---

## Need Help?

If you encounter issues:
- Vercel DNS troubleshooting: https://vercel.com/docs/concepts/projects/domains
- GoDaddy DNS help: https://www.godaddy.com/help/add-an-a-record-19238
