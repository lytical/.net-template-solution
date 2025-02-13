using System.Collections;

namespace Lyt.Host.Util
{
  public static class ObjectEx
  {
    public static T? DeepCopyTo<T>(this T? source, T? target = default) where T : class, new()
      => (T?)((object?)source).DeepCopyTo(target);

    public static object? DeepCopyTo(this object? source, object? target = default)
    {
      if (source == default)
        return source;
      var src_type = source.GetType();
      if (!src_type.IsClass || src_type.IsEnum || src_type == typeof(string))
        return source;
      if (target == default)
        target = Activator.CreateInstance(src_type);
      if (target != default)
      {
        if (source is ICollection sc && target is IList tc)
        {
          tc.Clear();
          foreach(var item in sc)
          {
            tc.Add(item.DeepCopyTo());
          }
        }
        else
        {
          var trg_type = target.GetType();
          if (trg_type.IsAssignableFrom(src_type))
          {
            foreach (var pdt in trg_type.GetProperties())
            {
              var pds = src_type.GetProperty(pdt.Name);
              if ((pds?.CanRead ?? false) && pdt.CanWrite)
                pdt.SetValue(target, pds.GetValue(source).DeepCopyTo(pdt.GetValue(target)));
            }
          }
        }
      }
      return target;
    }
  }
}
