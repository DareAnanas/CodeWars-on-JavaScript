function chooseBestSum(t, k, ls) {
    var sum=[];
    switch (k) {
        case 1: {
            for (var i = 0; i < ls.length; i++) {
                if ((ls[i]) <= t && ls[i] >= 0) sum.push(ls[i])
            }

            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 2: {
            for ( i=0; i<ls.length; i++) {
                for (var j = i + 1; j < ls.length; j++) {
                    if ((ls[i] + ls[j]) <= t && ls[i] >= 0 && ls[j] >= 0) sum.push(ls[i] + ls[j])
                }
            }
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;

        }

        case 3:
        {
            for ( i = 0; i < ls.length; i++) {
                for ( j = i + 1; j < ls.length; j++) {
                    for ( var n = j + 1; n < ls.length; n++) {
                        if ((ls[i] + ls[j] + ls[n]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0)
                            sum.push(ls[i] + ls[j] + ls[n])
                    }
                }
            }
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 4:
        {
            for ( i = 0; i < ls.length; i++) {
                for ( j = i + 1; j < ls.length; j++) {
                    for ( n = j + 1; n < ls.length; n++) {
                        for ( var m = n + 1; m < ls.length; m++) { if ((ls[i] + ls[j] + ls[n]+ls[m]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0)
                            sum.push(ls[i] + ls[j] + ls[n]+ls[m])
                        }
                    }
                }
            }

            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 5: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for ( n = j + 1; n < ls.length; n++) {
                        for ( m = n + 1; m < ls.length; m++) {
                            for (var s = m + 1; s < ls.length; s++) {
                                if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0)
                                    sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s])
                            }
                        }
                    }
                }
            }
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 6: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (var y = s + 1; y < ls.length; y++) {
                                    if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0)
                                        sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y])
                                }
                            }
                        }
                    }
                }
            }
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 7: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for (var z = m + 1; z < ls.length; z++) {

                                        if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0)
                                            sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z])
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 8: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for ( z = y + 1; z < ls.length; z++) {
                                        for (var w = z + 1; w < ls.length; w++) {
                                            if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0 && ls[w] >= 0)
                                                sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w])
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 9: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for ( z = y + 1; z < ls.length; z++) {
                                        for ( w = z + 1; w < ls.length; w++) {
                                            for (var o = w + 1; o < ls.length; o++) {
                                                if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0 && ls[w] >= 0 && ls[o] >= 0)
                                                    sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o])
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 10: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for ( z = y + 1; z < ls.length; z++) {
                                        for ( w = z + 1; w < ls.length; w++) {
                                            for ( o = w + 1; o < ls.length; o++) {
                                                for (var x = o + 1; x < ls.length; x++) {
                                                    if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0 && ls[w] >= 0 && ls[o] >= 0 && ls[x] >= 0)
                                                        sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o]+ ls[x])
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 11: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for (z = y + 1; z < ls.length; z++) {
                                        for (w = z + 1; w < ls.length; w++) {
                                            for (o = w + 1; o < ls.length; o++) {
                                                for (x = o + 1; x < ls.length; x++) {
                                                    for (var e = x + 1; e < ls.length; e++) {
                                                        if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0 && ls[w] >= 0 && ls[o] >= 0 && ls[x] >= 0 && ls[e] >= 0)
                                                            sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e])
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 12: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for (z = y + 1; z < ls.length; z++) {
                                        for (w = z + 1; w < ls.length; w++) {
                                            for (o = w + 1; o < ls.length; o++) {
                                                for (x = o + 1; x < ls.length; x++) {
                                                    for (e = x + 1; e < ls.length; e++) {
                                                        for (var a = e + 1; a < ls.length; a++) {
                                                        if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0 && ls[w] >= 0 && ls[o] >= 0 && ls[x] >= 0 && ls[e] >= 0 && ls[a] >= 0)
                                                            sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a])
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
}
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 13: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for (z = y + 1; z < ls.length; z++) {
                                        for (w = z + 1; w < ls.length; w++) {
                                            for (o = w + 1; o < ls.length; o++) {
                                                for (x = o + 1; x < ls.length; x++) {
                                                    for (e = x + 1; e < ls.length; e++) {
                                                        for (a = e + 1; a < ls.length; a++) {
                                                            for (var b = a + 1; b < ls.length; b++) {
                                                        if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0 && ls[w] >= 0 && ls[o] >= 0 && ls[x] >= 0 && ls[e] >= 0 && ls[a] >= 0 && ls[b] >= 0)
                                                            sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b])
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
}
}
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 14: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for (z = y + 1; z < ls.length; z++) {
                                        for (w = z + 1; w < ls.length; w++) {
                                            for (o = w + 1; o < ls.length; o++) {
                                                for (x = o + 1; x < ls.length; x++) {
                                                    for (e = x + 1; e < ls.length; e++) {
                                                        for (a = e + 1; a < ls.length; a++) {
                                                            for (b = a + 1; b < ls.length; b++) {
                                                                for (var c = b + 1; c < ls.length; c++) {
                                                        if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b] + ls[c]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0 && ls[w] >= 0 && ls[o] >= 0 && ls[x] >= 0 && ls[e] >= 0 && ls[a] >= 0 && ls[b] >= 0 && ls[c] >= 0)
                                                            sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b] + ls[c])
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
}
}
}
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 15: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for (z = y + 1; z < ls.length; z++) {
                                        for (w = z + 1; w < ls.length; w++) {
                                            for (o = w + 1; o < ls.length; o++) {
                                                for (x = o + 1; x < ls.length; x++) {
                                                    for (e = x + 1; e < ls.length; e++) {
                                                        for (a = e + 1; a < ls.length; a++) {
                                                            for (b = a + 1; b < ls.length; b++) {
                                                                for (c = b + 1; c < ls.length; c++) {
                                                                    for (var d = c + 1; d < ls.length; d++) {
                                                        if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b] + ls[c] + ls[d]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0 && ls[w] >= 0 && ls[o] >= 0 && ls[x] >= 0 && ls[e] >= 0 && ls[a] >= 0 && ls[b] >= 0 && ls[c] >= 0 && ls[d] >= 0)
                                                            sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b] + ls[c] + ls[d])
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
}
}
}
}
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 16: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for (z = y + 1; z < ls.length; z++) {
                                        for (w = z + 1; w < ls.length; w++) {
                                            for (o = w + 1; o < ls.length; o++) {
                                                for (x = o + 1; x < ls.length; x++) {
                                                    for (e = x + 1; e < ls.length; e++) {
                                                        for (a = e + 1; a < ls.length; a++) {
                                                            for (b = a + 1; b < ls.length; b++) {
                                                                for (c = b + 1; c < ls.length; c++) {
                                                                    for (d = c + 1; d < ls.length; d++) {
                                                                       for (var f = d + 1; f < ls.length; f++) {
                                                        if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b] + ls[c] + ls[d] + ls[f]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0 && ls[w] >= 0 && ls[o] >= 0 && ls[x] >= 0 && ls[e] >= 0 && ls[a] >= 0 && ls[b] >= 0 && ls[c] >= 0 && ls[d] >= 0 && ls[f] >= 0)
                                                            sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b] + ls[c] + ls[d] + ls[f])
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
}
}
}
}
}
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }
 
        case 17: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for (z = y + 1; z < ls.length; z++) {
                                        for (w = z + 1; w < ls.length; w++) {
                                            for (o = w + 1; o < ls.length; o++) {
                                                for (x = o + 1; x < ls.length; x++) {
                                                    for (e = x + 1; e < ls.length; e++) {
                                                        for (a = e + 1; a < ls.length; a++) {
                                                            for (b = a + 1; b < ls.length; b++) {
                                                                for (c = b + 1; c < ls.length; c++) {
                                                                    for (d = c + 1; d < ls.length; d++) {
                                                                       for (f = d + 1; f < ls.length; f++) {
                                                                           for (var h = f + 1; h < ls.length; h++) {
                                                        if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b] + ls[c] + ls[d] + ls[f] + ls[h]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0 && ls[w] >= 0 && ls[o] >= 0 && ls[x] >= 0 && ls[e] >= 0 && ls[a] >= 0 && ls[b] >= 0 && ls[c] >= 0 && ls[d] >= 0 && ls[f] >= 0 && ls[h] >= 0)
                                                            sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b] + ls[c] + ls[d] + ls[f] + ls[h])
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
}
}
}
}
}
}
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        case 18: {
            for (i = 0; i < ls.length; i++) {
                for (j = i + 1; j < ls.length; j++) {
                    for (n = j + 1; n < ls.length; n++) {
                        for (m = n + 1; m < ls.length; m++) {
                            for (s = m + 1; s < ls.length; s++) {
                                for (y = s + 1; y < ls.length; y++) {
                                    for (z = y + 1; z < ls.length; z++) {
                                        for (w = z + 1; w < ls.length; w++) {
                                            for (o = w + 1; o < ls.length; o++) {
                                                for (x = o + 1; x < ls.length; x++) {
                                                    for (e = x + 1; e < ls.length; e++) {
                                                        for (a = e + 1; a < ls.length; a++) {
                                                            for (b = a + 1; b < ls.length; b++) {
                                                                for (c = b + 1; c < ls.length; c++) {
                                                                    for (d = c + 1; d < ls.length; d++) {
                                                                       for (f = d + 1; f < ls.length; f++) {
                                                                           for (h = f + 1; h < ls.length; h++) {
                                                                               for (var l = h + 1; l < ls.length; l++) {
                                                        if ((ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b] + ls[c] + ls[d] + ls[f] + ls[h]+ ls[l]) <= t && ls[i] >= 0 && ls[j] >= 0 && ls[n] >= 0 && ls[m] >= 0 && ls[s] >= 0 && ls[y] >= 0 && ls[z] >= 0 && ls[w] >= 0 && ls[o] >= 0 && ls[x] >= 0 && ls[e] >= 0 && ls[a] >= 0 && ls[b] >= 0 && ls[c] >= 0 && ls[d] >= 0 && ls[f] >= 0 && ls[h] >= 0 && ls[l] >= 0)
                                                            sum.push(ls[i] + ls[j] + ls[n] + ls[m] + ls[s] + ls[y] + ls[z] + ls[w] + ls[o] + ls[x] + ls[e] + ls[a] + ls[b] + ls[c] + ls[d] + ls[f] + ls[h] + ls[l])
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
}
}
}
}
}
}
}
            if (sum.length > 0) {
                sum.sort(function (a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                });
                return sum[sum.length - 1]
            }
            else return null;
        }

        default: return null
    }
}